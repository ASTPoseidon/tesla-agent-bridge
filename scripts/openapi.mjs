import fs from 'node:fs';
const number = (minimum, maximum, integer = false) => ({ type: integer ? 'integer' : 'number', minimum, maximum });
const enumeration = (...values) => ({ type: 'string', enum: values });
const commandDefinitions = {
  door_lock: ['锁车', {}], door_unlock: ['解锁', {}],
  actuate_trunk: ['操作前后备箱（rear 是切换操作，请先查询状态）', { which_trunk: enumeration('front', 'rear') }],
  close_trunk: ['关闭电动后备箱（车型须支持）', {}],
  auto_conditioning_start: ['打开空调', {}], auto_conditioning_stop: ['关闭空调', {}],
  set_temps: ['设置空调温度，单位摄氏度', { driver_temp: number(15, 28), passenger_temp: number(15, 28) }],
  window_control: ['所有车窗通风或关闭', { command: enumeration('vent', 'close') }],
  remote_seat_cooler_request: ['座椅通风，seat_position 1=左前，2=右前；level 0=关闭，1–3=档位', { seat_position: number(1, 2, true), seat_cooler_level: number(0, 3, true) }],
  remote_seat_heater_request: ['座椅加热：heater 0左前/1右前/2左后/3中后/4右后/5左三排/6右三排；level 0–3', { heater: number(0, 6, true), level: number(0, 3, true) }],
  honk_horn: ['鸣笛', {}], flash_lights: ['闪灯', {}],
  navigation_request: ['发送目的地到车机', { type: enumeration('share_ext_content_raw'), value: { type: 'string', minLength: 1, maxLength: 2048, description: '目的地地址或地图分享内容' } }],
  navigation_gps_request: ['按地图坐标替换导航目的地（车辆签名通道）', { lat: number(-90, 90), lon: number(-180, 180), coordinate_system: { ...enumeration('wgs84','gcj02','bd09'), description: '必须标明地图坐标系：GPS/OSM=wgs84，高德/腾讯=gcj02，百度=bd09；桥接转换为 WGS84。先明确地点及坐标来源；不支持 order/途经点追加。' } }],
  media_toggle_playback: ['切换播放/暂停', {}], media_next_track: ['下一首', {}], media_prev_track: ['上一首', {}],
  media_volume_up: ['增大音量', {}], media_volume_down: ['减小音量', {}], adjust_volume: ['设置音量（0–10）', { volume: number(0, 10) }],
  charge_port_door_open: ['打开充电口', {}], charge_port_door_close: ['关闭充电口', {}],
  charge_start: ['开始充电', {}], charge_stop: ['停止充电', {}],
  set_charge_limit: ['设置充电上限', { percent: number(50, 100, true) }],
  set_charging_amps: ['设置充电电流', { charging_amps: number(0, 48, true) }],
  set_sentry_mode: ['开关哨兵模式', { on: { type: 'boolean' } }]
};
const vin = { in: 'path', name: 'vin', required: true, schema: { type: 'string', pattern: '^[A-HJ-NPR-Z0-9]{17}$' }, description: '使用车辆 VIN，不能使用车辆数字 ID' };
const idem = { in: 'header', name: 'Idempotency-Key', required: true, schema: { type: 'string', minLength: 16, maxLength: 128 }, description: '每次新操作使用 UUID；重试同一操作必须沿用该值。超时先查车况，不能自动换新值重发。24 小时有效。' };
const errorSchema = { type: 'object', required: ['error', 'message'], properties: {
  error: { type: 'string', description: '优先保留此机器错误码；不能只记录 HTTP 状态' },
  message: { type: 'string' }, execution_unknown: { type: 'boolean', description: '为 true 时执行结果未确认，不能自动换幂等键重发' },
  fault: { type: 'integer' }, details: { type: 'object', additionalProperties: true, properties: {
    phase: { type: 'string', enum: ['fetch', 'http_status', 'response_body'] },
    failure: { type: 'string', description: 'timeout/network/http_error/invalid_json/body_read_failed/invalid_json_shape' },
    upstream_status: { type: 'integer', minimum: 100, maximum: 599, description: '只有已收到 Tesla HTTP 响应时才提供' },
    elapsed_ms: { type: 'integer', minimum: 0, description: '本次 Fleet 请求耗时，不包含排队和 OAuth 刷新' },
  } },
} };
const errorResponse = description => ({ description, content: { 'application/json': { schema: { $ref: '#/components/schemas/BridgeError' } } } });
const responses = {
  200: { description: 'Tesla 响应；控制请求必须检查 response.result，不可以仅依据 HTTP 200 判断成功', content: { 'application/json': { schema: { type: 'object', additionalProperties: true } } } },
  400: errorResponse('本地参数校验失败，或 Tesla 上游明确拒绝；用 error/details.upstream_status 区分'),
  401: errorResponse('桥接 Bearer 密钥无效，或 Tesla 返回 401；用 error 和 details.upstream_status 区分'),
  403: errorResponse('管理权限/车辆授权范围不符，或 Tesla 明确拒绝'),
  408: errorResponse('Tesla 上游返回 408，车辆可能离线或休眠'),
  409: errorResponse('参数/车辆状态/会话或幂等冲突'),
  428: errorResponse('尚未完成车主 OAuth 授权'),
  429: errorResponse('请求受限；有明确秒数时见 details.retry_after，控制请求不自动重发'),
  502: errorResponse('检查 error/details：可能为传输失败、上游 5xx、成功响应无法解析或已有 pending 幂等请求；execution_unknown=true 时先确认执行情况，不能自动重发'),
  503: errorResponse('Tesla 返回服务不可用；不自动重发控制请求'),
};
const paths = {
  '/health': { get: { operationId: 'health', summary: '服务健康状态（不表示车辆已授权）', security: [], responses } },
  '/v1/capabilities': { get: { operationId: 'capabilities', summary: '查询支持的指令', responses } },
  '/api/1/vehicles': { get: { operationId: 'listVehicles', summary: '列出已授权车辆', responses } },
  '/api/1/vehicles/{vin}': { get: { operationId: 'vehicleStatus', summary: '车辆在线/休眠状态，不自动唤醒', parameters: [vin], responses } },
  '/api/1/vehicles/{vin}/vehicle_data': { get: { operationId: 'vehicleData', summary: '查车况，不自动唤醒；位置仅在明确指定端点时读取', parameters: [vin, { in: 'query', name: 'endpoints', schema: { type: 'string', default: 'charge_state;climate_state;vehicle_state;vehicle_config' }, description: '分号分隔。需要位置时显式传 location_data（可同时传 drive_state）。原始单位以 Tesla 返回为准；续航/里程通常为英里，转公里乘 1.609344。' }], responses } },
  '/api/1/vehicles/{vin}/fleet_status': { get: { operationId: 'fleetStatus', summary: '查看虚拟钥匙是否已配对，以及是否要求签名协议', parameters: [vin], responses } },
  '/api/1/vehicles/{vin}/key_status': { get: { operationId: 'keyStatus', summary: '只读验证车辆安全系统和车机的加密会话，不发送物理控制指令；需要车辆在线', parameters: [vin], responses } },
  '/api/1/vehicles/{vin}/wake_up': { post: { operationId: 'wakeVehicle', summary: '显式唤醒车辆', 'x-openai-isConsequential': true, parameters: [vin, idem], responses } },
  '/v1/auth/status': { get: { operationId: 'authorizationStatus', summary: '管理接口：查询是否已授权，使用 ADMIN_KEY', responses } },
  '/v1/auth/start': { post: { operationId: 'startAuthorization', summary: '管理接口：启动 OAuth，使用 ADMIN_KEY；浏览器必须保留响应 Cookie，随后在同一浏览器访问 authorize_url', 'x-openai-isConsequential': true, responses } },
  '/v1/setup/register': { post: { operationId: 'registerPartner', summary: '管理接口：向 Tesla 注册本应用域名与公钥，使用 ADMIN_KEY', 'x-openai-isConsequential': true, responses } }
};
for (const [command, [summary, properties]] of Object.entries(commandDefinitions)) {
  paths['/api/1/vehicles/{vin}/command/' + command] = { post: { operationId: command, summary, 'x-openai-isConsequential': true, parameters: [vin, idem], requestBody: { required: Object.keys(properties).length > 0, content: { 'application/json': { schema: { type: 'object', properties, required: Object.keys(properties), additionalProperties: false } } } }, responses } };
}
const spec = { openapi: '3.1.0', info: { title: 'Tesla Agent Bridge', version: '1.0.0', description: '个人 Tesla Fleet API 接入，支持 cn/na/eu 区域。所有业务接口使用独立 Bearer API 密钥。车辆控制需要 OAuth 授权及虚拟钥匙配对。此服务不会自动唤醒或自动重发物理操作。' }, servers: [{ url: 'https://tesla.example.com' }], security: [{ bearerAuth: [] }], components: { schemas: { BridgeError: errorSchema }, securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', description: '调用方填 API_KEY；/v1/auth/* 和 /v1/setup/* 填 ADMIN_KEY。不要填写 Tesla client secret 或令牌。' } } }, paths };
fs.writeFileSync(new URL('../openapi.json', import.meta.url), JSON.stringify(spec, null, 2) + '\n');

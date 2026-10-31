# 通用 agent / 前端接口

各聊天 agent 无需独立适配后端。选择它支持的 HTTP/OpenAPI、MCP Streamable HTTP 或 stdio 方式，填自己的服务地址与调用密钥。

## 入口与权限

| 项目 | 值 |
| --- | --- |
| HTTP | `https://你的域名` |
| Agent OpenAPI | `https://你的域名/openapi.agent.json` |
| 完整管理/业务 OpenAPI | `https://你的域名/openapi.json` |
| MCP | `https://你的域名/mcp` |
| 鉴权 | `Authorization: Bearer <调用密钥>` |
| 浏览器跨域 | `.env` 的 `CORS_ORIGINS` 填精确来源，再重新配置/部署 |

READONLY_API_KEY 仅允许查询；API_KEY 允许业务查询和控车。ADMIN_KEY 专用于 `/setup` 的车主授权管理，不给 agent。MCP 不暴露管理接口，默认只列查询工具；服务端 `MCP_ALLOW_CONTROL=true` 且连接使用 API_KEY 时才提供控制工具。

## MCP

参考 `examples/mcp-http.json`，把 URL 和凭据替换为自己的配置。提供无会话的 Streamable HTTP JSON 响应；客户端需要支持自定义 Bearer Header。工具参数和返回结构由服务端列出，车辆操作另外要求 `confirmed:true` 和 `idempotency_key`。

若客户端支持本地 stdio：先 `npm run build`，再按 `examples/mcp-stdio.json` 设置绝对脚本路径、BRIDGE_URL 和 BRIDGE_API_KEY。适配器由 Node 运行，只向指定 HTTPS 服务发送请求；本机开发可用 loopback HTTP。旧版只支持 SSE 的客户端需升级或自行桥接。

示例使用常见 `mcpServers` 配置结构，客户端的字段命名可能不同；这不是针对所有聊天应用的原生插件或逐家认证。协议使用官方 MCP 客户端做集成测试。

## HTTP / OpenAPI

导入 `/openapi.agent.json`，将 Bearer 密钥放客户端的凭据配置。接口示例：

```http
GET /api/1/vehicles
Authorization: Bearer <READONLY_API_KEY>
```

车辆控制：`POST /api/1/vehicles/{vin}/command/{command}`，另带 `Idempotency-Key` 与 JSON 参数。参数范围、操作是否有副作用均在 OpenAPI 中；不要自己推测车型能力。

给 agent 的通用行为说明见 `examples/agent-instructions.md`。多车时先明确目标 VIN。位置查询需要显式选择 location_data/drive_state，常规车况默认不取位置，也不自动唤醒。

## 结果与错误

控制请求的 HTTP 200 不等于成功，检查 `response.result`。真实执行结果未知时会有 `execution_unknown:true`；不能通过自动换幂等键来重试。原幂等结果缓存 24 小时，同键回放带 `Idempotency-Replayed:true`。

保留错误码及 `details.phase / failure / upstream_status / elapsed_ms`。上游 HTTP 500、网络超时与 JSON 解析失败是不同原因，不能只看桥接 502。导航按 Tesla 官方 SDK 使用 REST；上游出错或地址无法送达时仍应向用户如实报告，不能自动连发。

前端页面可使用这些相同接口；管理密钥仅在车主本地页面内存中使用，应用后端不要向普通浏览器或聊天提示词返回私钥、OAuth 令牌或 client secret。

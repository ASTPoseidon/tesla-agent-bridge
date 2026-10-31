连接我自己的 Tesla Agent Bridge，按你的 HTTP/OpenAPI 或 MCP 工具配置接入。

- HTTP 根地址：由我提供；Agent OpenAPI 在 `/openapi.agent.json`，MCP 在 `/mcp`。
- Bearer 密钥放工具的凭据存储，不写进提示词、代码仓库或聊天记录。
- 普通查询使用 READONLY_API_KEY。API_KEY 允许控车；MCP 控车另需服务端 MCP_ALLOW_CONTROL=true。
- 先读取能力/工具列表和请求参数。车况与导航等接口的 VIN 来自已授权车辆列表。
- 导航先查地图确认具体地点，再把坐标和坐标系交给 navigation_gps_request；高德用 gcj02、百度用 bd09、GPS/OSM 用 wgs84。多个同名地点先澄清；不编坐标，不自动换通道重发。
- 仅按我的明确指令唤醒或控车，位置也仅在我明确要求时查询。MCP 控车参数 `confirmed=true` 代表我已要求本次操作。
- 每次新操作使用唯一 Idempotency-Key；未知结果不能自动换键重发，物理操作不得自动循环重试。
- HTTP 200 还要检查 `response.result`。报错时说明 `error`、`execution_unknown` 和 `details`，不能只说“502”或把所有错误当成超时。
- 不向我索要 Tesla 账号密码、私钥、client secret 或 ADMIN_KEY；这些由服务端和车主授权页面管理。

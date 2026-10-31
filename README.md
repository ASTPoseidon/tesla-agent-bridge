# Tesla Agent Bridge

把自己的 Tesla 接入聊天 agent、自动化工具或前端应用。统一提供 **HTTP / OpenAPI / MCP**，可部署在 **Cloudflare Workers、Docker 或私人 VPS**。

应用代码 MIT 开源；Tesla 协议资源保留 Apache-2.0 许可。本仓库只含通用源码和示例，不含任何车主的生产凭据、车辆记录或私钥。

## 你会得到什么

- 电量、温度、门窗等车况查询；按需查询位置。
- 显式唤醒、空调、座椅、车窗、门锁、行李箱、媒体和充电等命令。
- 服务端车辆指令签名、OAuth 刷新、加密持久化和幂等去重。
- 网页完成域名注册、账户授权、虚拟钥匙配对引导。
- 同一套业务核心：CF 使用 Durable Objects；Node/Docker 使用持久化 SQLite。
- 只读密钥、控车密钥与管理密钥分离。MCP 默认只开放查询。

一个实例对应一个车主账户，可管理该账户已授权的多辆车。Node/Docker 使用单实例，不要将同一 SQLite 数据库用于多个服务进程。

## 快速开始

准备：Node.js 22.17+（推荐 24 LTS）、自己的 HTTPS 域名、已开通 Fleet API 的 Tesla 开发者应用，以及用于配对的 Tesla 手机 App。Docker 路线另需 Docker 与 Compose 2.30+。

```bash
git clone https://github.com/ASTPoseidon/tesla-agent-bridge.git
cd tesla-agent-bridge
npm ci
cp .env.example .env
```

Windows 可用 `Copy-Item .env.example .env`。在 `.env` 填写 **APP_ORIGIN、TESLA_REGION、TESLA_CLIENT_ID、TESLA_CLIENT_SECRET**，然后：

```bash
npm run configure
```

脚本生成本机 `.config/` 与 `.secrets/`，包括车辆 P-256 私钥和三种访问密钥。重复运行保留已有车辆密钥。Tesla client secret 会移入 `.secrets/production.json`，不会留在公开示例里。

选择一种部署方式：

| 方式 | 启动命令 | 数据保存 |
| --- | --- | --- |
| Docker + 自动 HTTPS | `docker compose up -d --build` | `bridge_data` 卷 |
| Cloudflare Workers | `npx wrangler login`，再 `npm run cf:bootstrap` | Durable Objects |
| 本机 / 原生 VPS | `npm run build`，再 `npm start` | `.data/owner.sqlite` |

Docker 前将域名 DNS 指向 VPS，开放 80/443；CF 前确保域名在该 Cloudflare 账户的 Zone 中。原生服务默认监听 `127.0.0.1:8787`，公网由 HTTPS 反向代理接入。[完整部署与自动更新](docs/deployment.md)。

## 完成首次 Tesla 接入

1. 在 Tesla 开发者应用设置允许来源 `https://你的域名`，回调设为 `https://你的域名/callback`，开放所需车辆权限。
2. 打开 `https://你的域名/setup`，从本机 `.secrets/production.json` 取 **ADMIN_KEY**，点击注册应用域名，再前往 Tesla 官方授权；在同一浏览器完成回调。
3. 在手机上按页面链接给车辆添加虚拟钥匙。随后用查询接口验证车辆列表；在线时可用 `key_status` 做只读会话验证。

```bash
npm run check
npm run check -- --vehicles
```

第二条命令读取本地只读密钥，只列车辆状态，不会唤醒或控车。`/health` 正常只代表服务启动；Fleet API 开通、额度/计费、车主授权和车辆配对仍须完成。

## 给聊天 agent 或前端接入

统一提供地址与调用密钥，无需为每个 agent 重写后端：

| 接口 | 地址 / 用途 |
| --- | --- |
| HTTP 根地址 | `https://你的域名` |
| Agent OpenAPI | `/openapi.agent.json`，不包含管理授权接口 |
| 完整 OpenAPI | `/openapi.json` |
| MCP Streamable HTTP | `/mcp`，使用 Bearer Header |
| 本地 MCP stdio | `node /绝对路径/dist/mcp-stdio.mjs` |

查询使用 **READONLY_API_KEY**。需要控车时使用 **API_KEY**；MCP 控车还需设置 `MCP_ALLOW_CONTROL=true` 后重新配置/部署。**ADMIN_KEY、Tesla client secret 和车辆私钥不交给聊天 agent。**

示例配置见 [HTTP MCP](examples/mcp-http.json)、[stdio MCP](examples/mcp-stdio.json)；可给 agent 读取 [通用调用说明](examples/agent-instructions.md)。具体客户端的字段名或导入方式由该客户端适配。[通用接口文档](docs/agents.md)。

## 更新和备份

先将源码与部署配置提交到自己的 GitHub，再部署同一提交。日常 CF 更新使用 `npm run cf:deploy`，不会重新上传 Secrets；Docker 更新使用 `docker compose up -d --build`。可按部署文档启用测试通过后自动发布 CF 的 Actions；新 Fork 默认只跑验证。

私钥、令牌加密密钥与数据必须留在自己的私有备份中。项目提供跨平台的口令加密备份/恢复工具，详见 [备份与恢复](docs/backup.md)。不要将 `.secrets/`、`.data/` 或备份文件提交到公开 GitHub；公开分支不能隔离同仓库里的秘密。

## 已知边界

- 命令受车型、固件、地区和 Tesla 权限影响；前备箱不能远程关闭，媒体控制不支持任意点歌。
- 导航分享按 Tesla 官方要求走 REST 服务；可能返回上游错误，不保证地址一定被车机接收。
- HTTP 200 仍要检查 `response.result`。`execution_unknown=true` 时不能自动生成新幂等键重发。查询不会自动唤醒。
- 提供 `cn / na / eu` 地区配置；NA/EU 的地址和流程按官方文档实现，未做实车验证。测试和容器检查使用模拟凭据，不替代每位用户自己的授权和配对。

开发验证：`npm run scan && npm run typecheck && npm test && npm run build`。CI 另验证 Docker 镜像、SQLite 重启持久化和 CF 打包。应用不内置大模型或聊天机器人账号，不接管你的聊天记录。

参考：[Tesla Fleet API](https://developer.tesla.com/docs/fleet-api)、[中国区认证](https://developer.tesla.cn/docs/fleet-api/authentication/third-party-tokens)、[地区说明](https://developer.tesla.com/docs/fleet-api/getting-started/regions-countries)、[MCP 传输规范](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports)。

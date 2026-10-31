# 部署

所有平台先按 README 填写 `.env` 并运行 `npm run configure`。同一个实例的车辆私钥、TOKEN_ENCRYPTION_KEY、API_KEY 和 ADMIN_KEY 要持续保留；换机器时先恢复备份，再配置。

## Docker / 私人 VPS

安装 Node 24 LTS、Docker 和 Compose 2.30+。`APP_ORIGIN` 填正式 HTTPS 域名，DNS 指向服务器，开放 TCP 80/443。然后：

```bash
npm ci
npm run configure
docker compose up -d --build
docker compose ps
```

Compose 的 Caddy 自动签发 HTTPS，bridge 不直接暴露公网端口。Secrets 由 Compose 读取 `.secrets/docker.env`，使用 raw 格式避免密钥里的 `$` 被替换。SQLite 保存到命名卷 `bridge_data`，不要用 `docker compose down -v` 更新服务。

只有 Docker、没有本机 Node 的 Linux VPS，也可以用 Node 容器运行配置脚本，再启动 Compose：

```bash
docker run --rm --user "$(id -u):$(id -g)" -v "$PWD:/app" -w /app node:24-bookworm-slim node scripts/configure.mjs
docker compose up -d --build
```

日常更新先推送 GitHub，再在服务器拉取相同提交：

```bash
git pull --ff-only
docker compose up -d --build
```

修改 `.env` 的公开配置或 MCP 开关后，运行 `npm run configure` 并重新创建 bridge 容器。已有密钥不会重新生成。

### 原生 Node / systemd

```bash
npm ci
npm run configure
npm run build
npm start
```

默认监听本地 8787。自己的反向代理应把 HTTPS 域名转到 `127.0.0.1:8787`；OAuth 使用 `APP_ORIGIN`，不能填内网容器地址。

仓库附 `deploy/tesla-agent-bridge.service`。安装到 `/opt/tesla-agent-bridge`，创建专用 `tesla-bridge` 用户，确保其可读取 `.config/`、`.secrets/` 并写入 `.data/`，按本机实际 Node 路径调整 `ExecStart`，再安装并启动服务。配置文件权限建议 600，目录 700。服务只运行一个实例。

## Cloudflare Workers

前提：域名的 Zone 在目标 CF 账户中，开发者应用来源/回调与 `APP_ORIGIN` 一致。Workers + SQLite Durable Objects 可使用相应免费额度；实际限额和 Tesla API 费用以服务商规则为准。

```bash
npm ci
npm run configure
npx wrangler login
npm run cf:bootstrap
```

`cf:bootstrap` 用于首次新实例：发布 Worker，再从本机 `.secrets/production.json` 上传 Secrets。脚本会检查已存在的公开钥匙，发现不匹配会停止。已有实例务必先恢复原密钥备份，不能拿新生成的密钥覆盖已配对车辆。

`.config/wrangler.jsonc` 为本机生成配置，包含 `custom_domain:true` 路由，域名不加 `/*`。如有多个账户，在 `.env` 设置 CLOUDFLARE_ACCOUNT_ID 后重新配置。不要把个人生成配置提交到公共仓库。

普通代码更新：

```bash
git pull --ff-only
npm ci
npm run cf:deploy
```

此命令保留已有 CF Secrets，版本 tag/message 记录 Git SHA。只有主动轮换某项密钥时才使用 Wrangler Secrets 管理；不要以重新初始化全部密钥来修复普通发布错误。

## GitHub → CF 自动发布

先完成一次 bootstrap，确认 `/setup`、OAuth 和车辆钥匙配对正常，再配置自己的 Fork：

| GitHub 设置 | 值 |
| --- | --- |
| Actions Secret `CLOUDFLARE_API_TOKEN` | 限制到目标账户/Zone 的 Workers 部署 Token |
| Actions Secret `CLOUDFLARE_ACCOUNT_ID` | 目标账户 ID |
| Repository variables | `APP_ORIGIN`、`TESLA_CLIENT_ID`、`TESLA_REGION`、`WORKER_NAME`，可选 `MCP_ALLOW_CONTROL`、`CORS_ORIGINS` |
| variable `CF_DEPLOY_ENABLED` | 最后设为 `true` |

`.github/workflows/ci.yml` 会在相关 `main` 推送后验证源码、MCP、Docker 和 CF 打包，通过后才发布。PR 不部署。CI 不生成车辆钥匙，也不把生产业务 Secrets 存进公开源码。部署失败时查看对应运行，不能把 GitHub push 成功当成 CF 已更新。

## 首次车辆授权和验证

完整步骤见 [README：完成首次 Tesla 接入](../README.md#完成首次-tesla-接入)，包含开发者应用注册、Allowed Origin / Redirect URI、交给部署 agent 的 Client ID / Secret，以及手机「完成设置」配对流程。

部署后打开正式域名 `/setup`，用本机 ADMIN_KEY 注册合作伙伴域名，登录 Tesla 账号完成官方 OAuth，再坐在车内用手机完成虚拟钥匙配对。`cn` 用 Tesla 中国端点，`na/eu` 的授权页面与令牌交换域名按 [官方第三方令牌流程](https://developer.tesla.com/docs/fleet-api/authentication/third-party-tokens) 分开处理。

`npm run check` 只查健康；`npm run check -- --vehicles` 使用本机只读密钥查看车辆列表。离线状态不代表部署失败。不要用开锁、闪灯或唤醒来做自动发布探针。

回滚也先在 GitHub 恢复所需源码/配置，再部署该提交；保留现有 CF namespace 或 Docker 数据卷及加密密钥。维护文档只记录当前约定与关键限制，操作细节放 CI 或私人运维记录。

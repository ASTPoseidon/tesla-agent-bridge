# 备份与恢复

公开仓库只放源码和示例。自己的 `.secrets/`、个性化 `.config/`、SQLite/DO 数据和备份应存放在自己的私有位置；不要通过“公开分支”隔离它们，GitHub 可见性按整个仓库生效。

## 需要保留的内容

- `.secrets/production.json`：Tesla 私钥、client secret、令牌加密密钥、管理/控车/只读密钥。
- `.config/runtime.json` 与 `.env`：实例地址、区域和客户端配置。
- Node 的 `.data/owner.sqlite` 或 Docker 的 `bridge_data`：加密 OAuth 状态、车辆会话及幂等记录。
- CF 部署 API Token 属于另外的部署凭据，保存在自己的密码管理器或 GitHub Actions Secrets；此工具不能读取 CF 或 GitHub 已保存的 Secret 值。

CF 的 OAuth/会话状态存储在 Durable Objects，本工具不会导出 CF 远端数据。只要原 namespace 和加密密钥保留，更新代码不需要重新授权；丢失远端数据时可用原车辆钥匙重新做账户授权。

## 跨平台加密备份

在私有文件中保存至少 16 字符的随机口令，通过环境变量 `BACKUP_PASSPHRASE_FILE` 指定文件路径，不把口令放命令参数或 Git。

```bash
export BACKUP_PASSPHRASE_FILE=/private/path/backup-password.txt
npm run backup
```

PowerShell 用 `$env:BACKUP_PASSPHRASE_FILE='C:/私有目录/backup-password.txt'`。工具生成 `.backups/*.enc`，采用 scrypt + AES-256-GCM，可跨操作系统恢复。密文与口令应分开保存；可把密文保存到自己的私有云端仓库，但不要推入本公开仓库。

原生 Node 会通过 SQLite 备份 API 生成一致性快照。Docker 数据在命名卷中，先取出快照再打包：

```bash
mkdir -p .data
docker compose stop bridge
docker compose cp bridge:/data/owner.sqlite .data/owner.sqlite
docker compose start bridge
npm run backup
```

停止服务会关闭并检查点化数据库。CF 部署时若本机没有 SQLite 文件，备份仅包含本机密钥和配置，命令会明确提示。

## 恢复到空安装

```bash
export BACKUP_PASSPHRASE_FILE=/private/path/backup-password.txt
npm run backup -- --restore /private/path/tesla-backup.enc
npm run configure
```

工具拒绝覆盖已有密钥或数据库。恢复后按相同部署方式启动：原生 Node 使用还原的 `.data/`；Docker 需要将恢复的数据库放回其数据卷，不能忽略卷内原数据；CF 需保留原 namespace，并在确有恢复需要时上传原 Secrets。

恢复到**全新 Docker 实例**且备份含 SQLite 时：

```bash
docker compose create --build bridge
docker compose cp .data/owner.sqlite bridge:/data/owner.sqlite
docker compose run --rm --user root --entrypoint chown bridge node:node /data/owner.sqlite
docker compose up -d
```

不要对仍在运行的数据库覆盖文件；已有实例先单独保留其数据和密钥，再执行恢复。

不要为升级软件重新生成车辆私钥或令牌加密密钥。前者改变后需要重新配对，后者改变后旧的加密状态无法读取。

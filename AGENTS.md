# Maintenance

- Keep this repository public-safe: examples only, no owner credentials, deployment identifiers, personal endpoints, backups or live vehicle logs. Configuration, state and encrypted backups belong in ignored directories or a separate private repository.
- Read README.md and docs/deployment.md. Keep docs concise and current; do not append step-by-step operational diaries.
- Source of truth is GitHub: validate, commit and push source/configuration before production deployment. Only report deployment success after the runtime has been verified. Do not deploy from a dirty checkout or a ZIP.
- Run `npm run scan`, `npm run typecheck`, `npm test`, `npm run build`. CI also tests the Docker image, state persistence and CF dry-run compilation.
- Preserve existing signing/encryption keys, owner storage and paired public key on upgrades. Do not regenerate secrets as a deployment shortcut.
- Mock all vehicle operations in tests. Live control/wake/location requests require the owner's instruction. Never automatically repeat commands whose result is unknown.
- Keep HTTP/OpenAPI and MCP behavior consistent across CF and SQLite adapters. Admin routes must never become MCP tools. Read-only keys must remain read-only.
- Use a short release note or CI result for meaningful changes; keep secret-bearing instance configuration and recovery instructions in the private deployment repository.

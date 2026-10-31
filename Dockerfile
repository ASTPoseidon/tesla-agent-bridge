FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY scripts/build.mjs scripts/build.mjs
COPY openapi.json ./
COPY LICENSE NOTICE ./
COPY vendor/tesla/LICENSE vendor/tesla/LICENSE
RUN npm run build

FROM node:24-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=8787 DATA_DIR=/data
RUN mkdir -p /data && chown node:node /data
COPY --from=build --chown=node:node /app/dist ./dist
USER node
VOLUME ["/data"]
EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=5s CMD node -e "fetch('http://127.0.0.1:8787/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "dist/server.mjs"]

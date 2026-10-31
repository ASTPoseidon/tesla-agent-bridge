import type { BridgeEnv } from './types';
import { regionConfig } from './regions';
const escape = (s: string) => s.replace(/[&<>"']/g, value => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[value]!));
export function setupPage(env: BridgeEnv) {
  const origin = escape(env.APP_ORIGIN);
  const pairing = escape(regionConfig(env.TESLA_REGION).pairing + '/_ak/' + new URL(env.APP_ORIGIN).hostname);
  const page = `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Tesla Agent Bridge</title>
<style>body{font:16px system-ui;line-height:1.7;max-width:760px;margin:5vh auto;padding:24px;background:#f7f8fa;color:#171a20}section{background:white;padding:22px;border:1px solid #ddd;border-radius:12px;margin:16px 0}input,button{font:inherit;padding:10px;margin:6px 0;box-sizing:border-box}input{width:100%}button{cursor:pointer;border:0;border-radius:6px;background:#171a20;color:white;padding:11px 18px}code{overflow-wrap:anywhere}p{color:#555}a{color:#245cca}#status{white-space:pre-wrap;overflow-wrap:anywhere}</style>
<h1>Tesla Agent Bridge</h1><p>个人车辆接口 · HTTP / OpenAPI / MCP</p>
<section><h2>1. 检查 Tesla 开发者应用</h2><p>来源：<code>${origin}</code><br>OAuth 回调：<code>${origin}/callback</code><br><a href="/.well-known/appspecific/com.tesla.3p.public-key.pem">检查公开 PEM 公钥</a></p></section>
<section><h2>2. 连接车主账户</h2><label>ADMIN_KEY（仅本页内存使用）<input id="key" type="password" autocomplete="off"></label>
<button id="register">注册应用域名</button> <button id="authorize">前往 Tesla 官方授权</button> <button id="check">查询授权状态</button><p id="status">首次先注册域名，再授权账户。</p></section>
<section><h2>3. 添加虚拟钥匙</h2><p>在已登录车主账户的手机上打开：<br><a href="${pairing}">${pairing}</a><br>按 Tesla App 指引完成配对。</p></section>
<section><h2>4. 接入你的 agent 或前端</h2><p>HTTP 根地址：<code>${origin}</code><br>OpenAPI：<a href="/openapi.json">/openapi.json</a><br>MCP：<code>${origin}/mcp</code></p><p>只读连接使用 READONLY_API_KEY；控车使用 API_KEY。MCP 控车还需要服务端 MCP_ALLOW_CONTROL=true。不要把 ADMIN_KEY 或 Tesla 私钥交给聊天 agent。</p></section>
<script>async function call(path,method){const out=document.getElementById('status');out.textContent='处理中…';try{const r=await fetch(path,{method,headers:{Authorization:'Bearer '+document.getElementById('key').value}});const d=await r.json();if(!r.ok)throw Error(d.message||d.error);if(d.authorize_url){location.assign(d.authorize_url);return}out.textContent=JSON.stringify(d,null,2)}catch(e){out.textContent=e.message}}document.getElementById('register').onclick=()=>call('/v1/setup/register','POST');document.getElementById('authorize').onclick=()=>call('/v1/auth/start','POST');document.getElementById('check').onclick=()=>call('/v1/auth/status','GET');</script></html>`;
  return new Response(page, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store',
    'Referrer-Policy': 'no-referrer', 'X-Content-Type-Options': 'nosniff',
    'Content-Security-Policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'" } });
}

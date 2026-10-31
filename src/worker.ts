import { DurableObject } from 'cloudflare:workers';
import { bridgeFetch } from './bridge';
import { OwnerAccountCore } from './core';
import type { BridgeEnv } from './types';
export default { fetch: bridgeFetch };
export class OwnerAccount extends DurableObject<BridgeEnv> {
  private owner = new OwnerAccountCore(this.ctx, this.env);
  fetch(request: Request) { return this.owner.fetch(request); }
  alarm() { return this.owner.alarm(); }
}

export interface Storage {
  get<T>(key: string): Promise<T | undefined>;
  put(key: string, value: unknown): Promise<void>;
  delete(key: string): Promise<unknown>;
  list(options: { prefix: string; limit?: number }): Promise<Map<string, unknown>>;
  getAlarm(): Promise<number | null>;
  setAlarm(time: number): Promise<void>;
}
export interface OwnerContext { storage: Storage }
export interface BridgeEnv {
  OWNER: { idFromName(name: string): any; get(id: any): { fetch(request: Request): Promise<Response> } };
  APP_ORIGIN: string;
  TESLA_REGION?: string;
  TESLA_CLIENT_ID: string;
  TESLA_CLIENT_SECRET: string;
  TESLA_SCOPES?: string;
  API_KEY: string;
  ADMIN_KEY: string;
  READONLY_API_KEY?: string;
  TOKEN_ENCRYPTION_KEY: string;
  TESLA_PRIVATE_KEY_PKCS8: string;
  PUBLIC_KEY_RAW: string;
  PUBLIC_KEY_PEM: string;
  MCP_ALLOW_CONTROL?: string;
  CORS_ORIGINS?: string;
}

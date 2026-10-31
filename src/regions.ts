export const DEFAULT_SCOPES = 'openid offline_access vehicle_device_data vehicle_cmds vehicle_charging_cmds vehicle_location';
const regions = {
  cn: { region: 'cn', fleet: 'https://fleet-api.prd.cn.vn.cloud.tesla.cn', auth: 'https://auth.tesla.cn/oauth2/v3', token: 'https://auth.tesla.cn/oauth2/v3/token', pairing: 'https://www.tesla.cn' },
  na: { region: 'na', fleet: 'https://fleet-api.prd.na.vn.cloud.tesla.com', auth: 'https://auth.tesla.com/oauth2/v3', token: 'https://fleet-auth.prd.vn.cloud.tesla.com/oauth2/v3/token', pairing: 'https://www.tesla.com' },
  eu: { region: 'eu', fleet: 'https://fleet-api.prd.eu.vn.cloud.tesla.com', auth: 'https://auth.tesla.com/oauth2/v3', token: 'https://fleet-auth.prd.vn.cloud.tesla.com/oauth2/v3/token', pairing: 'https://www.tesla.com' },
};
export function regionConfig(region = 'cn') {
  if (!(region in regions)) throw new Error('TESLA_REGION must be cn, na or eu');
  return regions[region as keyof typeof regions];
}

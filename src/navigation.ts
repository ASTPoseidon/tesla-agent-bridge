// Coordinate formulas adapted from wandergis/coordtransform (MIT); see vendor/coordtransform/LICENSE.
// GPS action wire layout: Teslemetry/tesla-protocol 30360ae9ab745c6b65a73688dd3dbab9d4a47ee8
// (Apache-2.0), VehicleAction.navigationGpsRequest=53. See vendor/teslemetry/README.md.
import { Writer } from 'protobufjs/minimal.js';

export function navigationPoint(input: Record<string, unknown>): { lat: number; lon: number } {
  const { lat, lon, coordinate_system: system } = input;
  if (Object.keys(input).some(key => !['lat','lon','coordinate_system'].includes(key))
      || typeof lat !== 'number' || typeof lon !== 'number'
      || !Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180
      || !['wgs84','gcj02','bd09'].includes(system as string)) {
    throw new RangeError('导航需要合法 lat、lon 和 coordinate_system（wgs84/gcj02/bd09）；仅支持替换目的地');
  }
  if (system === 'wgs84') return { lat, lon };
  let sourceLat = lat, sourceLon = lon;
  if (system === 'bd09') {
    const x = lon - 0.0065, y = lat - 0.006, xPi = Math.PI * 3000 / 180;
    const radius = Math.hypot(x,y) - 0.00002 * Math.sin(y*xPi);
    const angle = Math.atan2(y,x) - 0.000003 * Math.cos(x*xPi);
    sourceLat = radius * Math.sin(angle); sourceLon = radius * Math.cos(angle);
  }
  // Outside the published offset-conversion bounds there is no GCJ offset.
  if (sourceLon < 72.004 || sourceLon > 137.8347 || sourceLat < 0.8293 || sourceLat > 55.8271)
    return { lat:sourceLat, lon:sourceLon };
  let resultLat=sourceLat, resultLon=sourceLon;
  for (let iteration=0; iteration<10; iteration++) {
    const x=resultLon-105, y=resultLat-35, pi=Math.PI;
    let deltaLat=-100+2*x+3*y+0.2*y*y+0.1*x*y+0.2*Math.sqrt(Math.abs(x));
    deltaLat+=(20*Math.sin(6*x*pi)+20*Math.sin(2*x*pi))*2/3;
    deltaLat+=(20*Math.sin(y*pi)+40*Math.sin(y*pi/3))*2/3;
    deltaLat+=(160*Math.sin(y*pi/12)+320*Math.sin(y*pi/30))*2/3;
    let deltaLon=300+x+2*y+0.1*x*x+0.1*x*y+0.1*Math.sqrt(Math.abs(x));
    deltaLon+=(20*Math.sin(6*x*pi)+20*Math.sin(2*x*pi))*2/3;
    deltaLon+=(20*Math.sin(x*pi)+40*Math.sin(x*pi/3))*2/3;
    deltaLon+=(150*Math.sin(x*pi/12)+300*Math.sin(x*pi/30))*2/3;
    const radians=resultLat*pi/180, eccentricity=0.00669342162296594323;
    const magic=1-eccentricity*Math.sin(radians)**2, root=Math.sqrt(magic), axis=6378245;
    deltaLat=deltaLat*180/((axis*(1-eccentricity))/(magic*root)*pi);
    deltaLon=deltaLon*180/(axis/root*Math.cos(radians)*pi);
    const errorLat=resultLat+deltaLat-sourceLat, errorLon=resultLon+deltaLon-sourceLon;
    resultLat-=errorLat; resultLon-=errorLon;
    if (Math.max(Math.abs(errorLat),Math.abs(errorLon))<1e-9) break;
  }
  return { lat:resultLat, lon:resultLon };
}

export function encodeNavigationGps(input: Record<string, unknown>): Uint8Array {
  const point=navigationPoint(input), gps=Writer.create();
  if (point.lat !== 0) gps.uint32(9).double(point.lat);
  if (point.lon !== 0) gps.uint32(17).double(point.lon);
  // Omitted order is the schema's Replace=0. No append/prepend route is exposed.
  const vehicle=Writer.create().uint32(426).bytes(gps.finish()).finish();
  return Writer.create().uint32(18).bytes(vehicle).finish();
}

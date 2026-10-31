import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { encodeCommand } from '../src/protocol';
import { navigationPoint } from '../src/navigation';

const vectors=JSON.parse(readFileSync(new URL('./fixtures/navigation-gps.json',import.meta.url),'utf8'));
for (const vector of vectors.cases) {
  test('signed GPS payload matches independent golden vector: '+vector.name,()=>{
    const encoded=encodeCommand('navigation_gps_request',{lat:vector.payload.lat,lon:vector.payload.lon,coordinate_system:'wgs84'});
    assert.equal(encoded.domain,3);
    assert.equal(Buffer.from(encoded.payload).toString('hex'),vector.hex);
  });
}
test('map coordinates convert to WGS84 rather than silently shifting the destination',()=>{
  const result=navigationPoint({lat:39.91640428150164,lon:116.41024449916938,coordinate_system:'gcj02'});
  assert.ok(Math.abs(result.lat-39.915)<1e-7); assert.ok(Math.abs(result.lon-116.404)<1e-7);
  const baidu=navigationPoint({lat:39.922699552216216,lon:116.41662724378733,coordinate_system:'bd09'});
  assert.ok(Math.abs(baidu.lat-39.915)<2e-6); assert.ok(Math.abs(baidu.lon-116.404)<2e-6);
  assert.deepEqual(navigationPoint({lat:37.5,lon:-122.25,coordinate_system:'wgs84'}),{lat:37.5,lon:-122.25});
});
test('invalid coordinates, unknown CRS and unsupported route order fail before signing',()=>{
  for (const input of [
    {lat:91,lon:0,coordinate_system:'wgs84'}, {lat:0,lon:181,coordinate_system:'wgs84'},
    {lat:NaN,lon:1,coordinate_system:'wgs84'}, {lat:0,lon:Infinity,coordinate_system:'wgs84'},
    {lat:'37.5',lon:-122.25,coordinate_system:'wgs84'}, {lat:0,lon:0},
    {lat:0,lon:0,coordinate_system:'unknown'}, {lat:0,lon:0,coordinate_system:'wgs84',order:1},
  ]) assert.throws(()=>encodeCommand('navigation_gps_request',input),/导航需要合法/);
});

# GPS navigation wire schema

The GPS action uses the Apache-2.0 extensions in [Teslemetry/tesla-protocol](https://github.com/Teslemetry/tesla-protocol/tree/30360ae9ab745c6b65a73688dd3dbab9d4a47ee8), commit `30360ae9ab745c6b65a73688dd3dbab9d4a47ee8`.

`CarServer.Action.vehicleAction` is tag 2; `VehicleAction.navigationGpsRequest` is tag 53; its `lat` and `lon` are doubles at tags 1 and 2. The extension enum's default `RemoteNavTripOrderReplace=0` is omitted. This bridge only exposes replacing a destination, and rejects route-order arguments.

These navigation fields are community extensions, absent from the pinned Tesla SDK schemas. They are encoded separately so existing protocol fields remain unchanged. `tests/fixtures/navigation-gps.json` preserves the upstream golden vectors; these describe synthetic locations and contain no vehicle data. See LICENSE in this directory.

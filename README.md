# italy-fuel-api-client

A lightweight client to interact with the official Osservatorio Prezzi fuel API.

## Usage

- Import `fuelApi`:
```js
import { fuelApi } from "italy-fuel-api-client";
```

- Call endpoints:
```js
//  gets fuel list
const fuelList = fuelApi.registry.getFuelList();

// search in area
const operators = fuelApi.search.searchArea({
    region: 9,
    fuelType: "1-x",
});
```

## Available endpoints

The `fuelApi` objects splits available endpoints by `registry` and `search`, reflecting the acutal API endpoints.

[Types overview](docs/types.md)
[Fuel id explanation](docs/fuel.md)

### Registry

| **Function**                                 | **Description**                                                                    |
|----------------------------------------------|------------------------------------------------------------------------------------|
| `fuelApi.registry.getRegionList()`           | Returns the list of regions.                                                       |
| `fuelApi.registry.getProvinceList(regionId)` | Returns the list of provinces by region.                                           |
| `fuelApi.registry.getTownList(provinceCode)` | Returns the list of towns by province. Accepts province code as input (e.g. "MT"). |
| `fuelApi.registry.getFuelList()`             | Returns the list of fuel types.                                                    |
| `fuelApi.registry.getServiceList()`          | Returns the list of services.                                                      |

### Search

| **Function**                         | **Description**                                                        |
|--------------------------------------|------------------------------------------------------------------------|
| `fuelApi.search.searchArea(payload)` | Returns search results for a given area. Accepts `ISearchAreaPayload`. |
| `fuelApi.search.searchZone(payload)` | Returns search results for a given zone. Accepts `ISearchZonePayload`. |

## Development

- Install dependencies:

```bash
npm install
```

- Run the unit tests:

```bash
npm run test
```

- Build the library:

```bash
npm run build
```

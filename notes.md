**baseurl**: `https://carburanti.mise.gov.it/ospzApi`

## endpoints

### `search/area`

POST ricerca per area (regione / provincia / comune)

#### payload

```json
{
  "region": 2,
  "province": "CH",
  "town": "Altino",
  "fuelType": "1-x",
  "priceOrder": "asc",
  "service": "4"
}
```

#### returns

```json
{
  "success": true,
  "center": {
    "lat": 0,
    "lng": 0
  },
  "results": [
    {
      "id": 0,
      "name": "string",
      "fuels": [
        {
          "id": 0, // not same id as from GET fuels
          "price": 0,
          "name": "string", //eg. Benzina
          "fuelId": 0, // almost same as GET fuels
          "isSelf": true
        }
      ],
      "location": {
        "lat": 0,
        "lng": 0
      },
      "insertDate": "2026-04-22T23:49:20+02:00",
      "address": "string",
      "brand": "string",
      "distance": 0 | null
    }
  ]
}
```

### `registry/region`

GET lista regioni

#### returns

```json
[
  {
    "id": "numeric-string",
    "description": "string" // name
  }
]
```

### `registry/province?regionId=<id>`

GET lista province per regione

#### returns

```json
[
  {
    "id": "string", // province code e.g. "LT"
    "description": "string" // name
  }
]
```

### `registry/town?province=<sigla>`

GET lista comuni per provincia

#### returns

```json
[
  {
    "id": "string", // name
    "description": "string" // name
  }
]
```

### `registry/fuels`

GET tipi carburante

#### returns

```json
[
  {
    "id": "string", /// e.g. "1-x" | "1-1" | "1-2" ...
    "description": "string"
  }
]
```

### `registry/services`

GET servizi stazione

#### returns

```json
[
  {
    "id": "numeric-string",
    "description": "string" // name
  }
]
```

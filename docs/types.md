# Input types

## Search

```ts
type Position = {
  lat: number;
  lng: number;
};

type SearchAreaPayload = {
  region: number; // e.g. 9
  fuelType?: string; // e.g. "1-x"
  priceOrder?: Order.ASC | Order.DESC;
  service?: number; // e.g. 1
  province?: string; // e.g. "LT"
  town?: string; // e.g. "Latina"
};

type SearchZonePayload = {
  points: Position[];
  radius: number; // radius in km, e.g. 2
  fuelType?: string; // e.g. "1-x"
  priceOrder?: Order.ASC | Order.DESC;
  service?: number; // e.g. 1
};
```

# Output types

```ts
type SearchResult = {
  success: boolean;
  center: Position;
  results: LocationResult[];
};

type LocationResult = {
  id: number;
  name: string;
  fuels: FuelResult[];
  location: Position;
  insertDate: string; // ISO date
};

type FuelResult = {
  id: number;
  price: number;
  name: string;
  fuelId: number;
  isSelf: boolean;
};
```

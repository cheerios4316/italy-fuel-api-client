import type { Optional, Order, Position } from "./common";

interface ISearchPayload {
  fuelType: string;
  priceOrder: Order;
  service: number;
}

interface ISearchAreaPayload extends Optional<ISearchPayload> {
  region: number;
  province?: string;
  town?: string;
}

interface ISearchZonePayload extends Optional<ISearchPayload> {
  points: Position[];
  radius: number;
}

interface IFuelResult {
  id: number;
  price: number;
  name: string;
  fuelId: number;
  isSelf: boolean;
}

interface ILocationResult {
  id: number;
  name: string;
  fuels: IFuelResult[];
  location: Position;
  insertDate: string;
  address: string | null;
  brand: string;
  distance: number | null | string;
}

interface ISearchResult {
  success: boolean;
  center: Position;
  results: ILocationResult[];
}

export {
  type ISearchZonePayload as SearchZonePayload,
  type ISearchAreaPayload as SearchAreaPayload,
  type ILocationResult as LocationResult,
  type ISearchResult as SearchResult,
  type IFuelResult as FuelResult,
};

import type {
  SearchAreaPayload,
  SearchResult,
  SearchZonePayload,
} from "@/types";
import { baseFuelApi } from "./base";
import { SearchEndpoints } from "@/constants";

const searchArea = async (payload: SearchAreaPayload): Promise<SearchResult> =>
  baseFuelApi.post(SearchEndpoints.AREA, payload) as unknown as SearchResult;

const searchZone = async (payload: SearchZonePayload): Promise<SearchResult> =>
  baseFuelApi.post(SearchEndpoints.ZONE, payload) as unknown as SearchResult;

const searchApi = {
  searchZone,
  searchArea,
};

export { searchApi };

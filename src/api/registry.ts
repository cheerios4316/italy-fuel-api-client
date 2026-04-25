import { RegistryEndpoints } from "@/constants";
import { baseFuelApi, resultsFromGeneric } from "./base";
import type {
  FuelsList,
  ProvinceList,
  RegionList,
  ServicesList,
  TownList,
} from "@/types";

const getRegionList = async (): Promise<FuelsList> =>
  resultsFromGeneric(
    baseFuelApi.get(RegistryEndpoints.REGIONS),
  ) as unknown as RegionList;

const getProvinceList = async (regionId: number) =>
  resultsFromGeneric(
    baseFuelApi.get(`${RegistryEndpoints.PROVINCES}?regionId=${regionId}`),
  ) as unknown as ProvinceList;

const getTownList = async (provinceCode: string) =>
  resultsFromGeneric(
    baseFuelApi.get(`${RegistryEndpoints.TOWNS}?province=${provinceCode}`),
  ) as unknown as TownList;

const getFuelList = async () =>
  resultsFromGeneric(
    baseFuelApi.get(RegistryEndpoints.FUELS),
  ) as unknown as FuelsList;

const getServiceList = async () =>
  resultsFromGeneric(
    baseFuelApi.get(RegistryEndpoints.SERVICES),
  ) as unknown as ServicesList;

const registryApi = {
  getRegionList,
  getProvinceList,
  getTownList,
  getFuelList,
  getServiceList,
};

export { registryApi };

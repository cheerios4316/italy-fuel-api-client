import { BASE_API_URI } from "@/constants";
import { registryApi } from "./registry";
import { searchApi } from "./search";

const buildUrl = (path: string) => `${BASE_API_URI}${path}`;

const resultsFromGeneric = async (jsonPromise: any) =>
  (await jsonPromise).results;

const get = async (path: string) => {
  return (
    await fetch(buildUrl(path), {
      method: "GET",
    })
  ).json();
};

const post = async (path: string, payload: object) => {
  return (
    await fetch(buildUrl(path), {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

const baseApi = {
  get,
  post,
};

const fuelApi = {
  registry: registryApi,
  search: searchApi,
};

export { baseApi as baseFuelApi, fuelApi, resultsFromGeneric };

import { fuelApi } from "./dist/index.mjs";

const test = async () => {
    const data = await fuelApi.search.searchArea({
        province: "RM",
        region: 9
    })

    console.log(data.results.length);
}

test();
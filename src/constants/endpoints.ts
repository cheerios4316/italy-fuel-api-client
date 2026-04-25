const BASE_API_URI = "https://carburanti.mise.gov.it/ospzApi";

enum RegistryEndpoints {
    REGIONS = "/registry/region",
    PROVINCES = "/registry/province",
    TOWNS = "/registry/town",
    FUELS = "/registry/fuels",
    SERVICES = "/registry/services",
}

enum SearchEndpoints {
    ZONE = "/search/zone",
    AREA = "/search/area",
}

export { BASE_API_URI, RegistryEndpoints, SearchEndpoints };

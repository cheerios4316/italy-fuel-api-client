interface IPosition {
  lat: number;
  lng: number;
}

interface IDescriptor<T extends string | number> {
  id: T;
  description: string;
}

enum Order {
    ASC = "asc",
    DESC = "desc",
}

type Optional<T> = {
    [Key in keyof T]?: T[Key];
}

export {
  type IPosition as Position,
  type IDescriptor as Descriptor,
  type Order,
  type Optional
};

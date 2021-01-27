export interface ICar {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export type INewCar = Omit<ICar, 'id'>;
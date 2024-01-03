export default interface IPlaces {
  id: number;
  title: string;
  description: string;
  phoneNumber: string;
  point: number;
  imageUrl: string;
  cost: number;
  count: number;
  category: Array<string>;
  minTimePlaces: number;
  maxTimePlaces: number;
  full: boolean;
  beginDay: string;
  endDay: string;
  createdAt: string;
  updatedAt: string;
}

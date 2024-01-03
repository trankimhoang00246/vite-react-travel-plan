export default interface IPlacesForm {
  title: string;
  phoneNumber: string;
  description: string;
  cost: number;
  beginDay: string;
  endDay: string;
  minTimePlaces: number;
  maxTimePlaces: number;
  categoryId: Array<number>;
  imageId: Array<number>;
  linkId: number;
  addressId: number;
  full: boolean;
}

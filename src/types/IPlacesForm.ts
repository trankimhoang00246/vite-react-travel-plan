export default interface IPlacesForm {
  title: string;
  phoneNumber: string;
  description: string;
  cost: number;
  beginDay: string;
  endDay: string;
  minTimePlaces: number;
  maxTimePlaces: number;
  destination: number;
  categoryId: number[];
  addressString: string;
  addressLinkMap: string;
  embeddedAddress: string;
  name: string;
  url: string;
  imageId: number[];
  full: string;
}

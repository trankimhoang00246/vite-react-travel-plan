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
  imageId: any;
  tag: string[];
  full: boolean;
}

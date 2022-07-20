import type { ILocation } from "./locationTypes";

export interface ICharacter {
  __typename: string;
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
}

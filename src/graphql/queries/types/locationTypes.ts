import type { ICharacter } from "./characterTypes";

export interface ILocation {
  id: string;
  name: string;
  dimension: string;
  type: string;
  residents: ICharacter[];
}

import type { ICharacter } from "./characterTypes";

export interface IEpisode {
  id: string;
  name: string;
  air_data: string;
  episode: string;
  characters: ICharacter[];
}

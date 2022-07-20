import type { ICharacter } from "./characterTypes";

export interface ICharactersQuery {
  characters: ICharacters;
}

export interface ICharacters {
  results: ICharacter[];
}

export interface ICharactersQuery {
  characters: ICharacters;
}

export interface ICharacters {
  results: ICharacter[];
}

export interface ICharacter {
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
  __typename: string;
}

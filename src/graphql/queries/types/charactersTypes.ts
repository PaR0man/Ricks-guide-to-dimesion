export interface ICharactersQuery {
  characters: ICharacters;
}

export interface ICharacters {
  results: ICharacter[];
}

export interface ICharacter {
  id: String;
  image: String;
  name: String;
  species: String;
  status: String;
  __typename: String;
}

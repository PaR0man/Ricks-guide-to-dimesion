import gql from "graphql-tag";

export const CHARACTERS = gql`
  query characters {
    characters {
      results {
        id
        name
      }
    }
  }
`;

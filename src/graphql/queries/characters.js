import gql from "graphql-tag";

export const CHARACTERS = gql`
  query characters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
        status
      }
    }
  }
`;

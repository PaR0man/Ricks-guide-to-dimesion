import gql from "graphql-tag";

export const CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
        dimension
      }
      location {
        id
        name
        dimension
      }
      episode {
        id
        name
      }
    }
  }
`;

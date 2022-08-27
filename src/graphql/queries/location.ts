import gql from "graphql-tag";

export const LOCATION = gql`
  query location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;

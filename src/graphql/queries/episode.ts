import gql from "graphql-tag";

export const EPISODE = gql`
  query episode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      characters {
        id
        image
        name
      }
    }
  }
`;

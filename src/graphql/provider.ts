import { createApolloProvider } from "@vue/apollo-option";
import apolloClient from "./client";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

export default apolloProvider;

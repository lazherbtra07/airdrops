import { InMemoryCache, ApolloClient } from "@apollo/client";
import { NEXT_PUBLIC_SITE_URL } from "./constants";

const GQL_URL = NEXT_PUBLIC_SITE_URL + "/graphql";

const client = new ApolloClient({
  uri: GQL_URL,
  cache: new InMemoryCache(),
});

export default client;

"use client";

import { ApolloProvider as ApolloHooksProvider } from "@apollo/client";
import appoloClient from "../../lib/apollo-client";

function CustomApolloProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloHooksProvider client={appoloClient}>{children}</ApolloHooksProvider>
  );
}

export default CustomApolloProvider;

//Question11
// Demonstrate how to handle errors in GraphQL queries  Create a React component
// that displays error messages when GraphQL requests fail and provides a way for users to retry the request.

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GraphqlError from "./GraphqlError";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphhql",
  cache: new InMemoryCache(),
});

export default function GraphQlIndex() {
  return (
    <ApolloProvider client={client}>
      <GraphqlError />
    </ApolloProvider>
  );
}

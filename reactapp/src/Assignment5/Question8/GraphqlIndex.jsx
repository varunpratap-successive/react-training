//Question8
// set up a GraphQL client library like Apollo Client.
// Create a simple component that uses the client to fetch and display data from a GraphQL API.

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GraphqlApp from "./GraphqlApp";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",

  cache: new InMemoryCache(),
});

export default function GraphqlIndex() {
  return (
    <ApolloProvider client={client}>
      <GraphqlApp />
    </ApolloProvider>
  );
}

//Question9
// .Create a React component that makes GraphQL queries to retrieve a list of items
// (e.g., a list of books, movies, or products) from a GraphQL API.
// Implement pagination for large datasets and display the data in a user-friendly way.

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GraphqlPaginationApp from "./GraphqlPaginationApp";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

export default function GraphqlPaginationIndex() {
  return (
    <ApolloProvider client={client}>
      <GraphqlPaginationApp />
    </ApolloProvider>
  );
}

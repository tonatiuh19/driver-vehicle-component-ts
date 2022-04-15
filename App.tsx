import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./src/screens/Home/Home";

export default function App() {
  const client = new ApolloClient({
    uri: "https://api.curri.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

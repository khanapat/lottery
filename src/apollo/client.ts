import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

export const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/cryptopuntdev4/lottery",
    cache: cache,
});
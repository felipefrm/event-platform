import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ooosjt0msn01z4he4yhjsw/master',
  cache: new InMemoryCache()
})
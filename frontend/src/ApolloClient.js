// src/ApolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/subgraphs/name/alx-example', // Replace with your subgraph name
  cache: new InMemoryCache(),
});

export default client;
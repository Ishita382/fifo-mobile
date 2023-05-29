import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { CONTINENT_QUERY } from "./gql/Query";
import App from "../App";
import { Text } from "react-native";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Countries = () => {
  // const queryClient = new QueryClient();
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });
  const { data } = useQuery(CONTINENT_QUERY);
  console.log(data);
  return (
    <ApolloClient client={client}>
      <Text>Hello, I am your cat!</Text>
    </ApolloClient>
  );
};

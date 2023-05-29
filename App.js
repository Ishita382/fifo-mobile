import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Countries from "./src/Countries";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { CONTINENT_QUERY } from "./src/gql/Query";
import { useRef } from "react";
import { Countries } from "./src/Countries";

export default function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text>My Countries App</Text>
        <StatusBar style="auto" />
        {/* <Countries /> */}
        <Countries />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

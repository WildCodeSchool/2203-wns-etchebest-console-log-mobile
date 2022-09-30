import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { AuthProvider } from "./context/AuthContext";
import { setContext } from "@apollo/client/link/context";
import AppNav from "./navigation/AppNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const httpLink = createHttpLink({
    // modifier l'uri en fonction de son adresse IP
    uri: "http://192.168.1.195:4000/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = AsyncStorage.getItem("token");
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  });

  const client = new ApolloClient({
    uri: "http://192.168.1.195:4000/graphql",
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;

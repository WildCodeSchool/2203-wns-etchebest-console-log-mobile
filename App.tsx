import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { AuthProvider } from './context/AuthContext';
import { setContext } from '@apollo/client/link/context';
import AppNav from './navigation/AppNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Env from './Env';
import { graphql } from './src/gql/gql';

const App = () => {
  const uri = Env.API_URL;
  const httpLink = createHttpLink({
    uri: `${uri}/graphql`,
  });

  const authLink = setContext((_, { headers }) => {
    const token = AsyncStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  });

  const client = new ApolloClient({
    uri,
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

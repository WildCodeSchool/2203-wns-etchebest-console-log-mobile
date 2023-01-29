import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from './context/ProjectContext';
import AppNav from './navigation/AppNav';
import Env from './Env';

const App = () => {
  const uri = Env.API_URL;
  const httpLink = createHttpLink({
    uri: `${uri}/graphql`,
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      return {
        headers: {
          ...headers,
          authorization: token,
        },
      };
    }
    return {
      headers: {
        ...headers,
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
        <ProjectProvider>
          <AppNav />
        </ProjectProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;

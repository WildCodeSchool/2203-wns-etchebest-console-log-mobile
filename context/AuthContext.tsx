import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';
import { Alert } from 'react-native';
import jwt_decode from 'jwt-decode';
import LOGIN from '../lib/queries/login';
import REGISTER from '../lib/queries/register';

export type SignInInterface = {
  email: string;
  password: string;
};
export type RegisterInterface = {
  name: string;
  email: string;
  password: string;
};
export interface AuthContextInterface {
  isLoading: boolean;
  token: string | null;
  signIn: (data: SignInInterface) => void;
  signOut: () => void;
  registerUser: (data: RegisterInterface) => void;
  isLogged: boolean;
  user: TokenUser | null;
}
interface ChildrenProps {
  children: JSX.Element;
}

interface TokenUser {
  id: number;
  name: string;
  email: string;
}

export const AuthContext = createContext<AuthContextInterface>({
  isLoading: false,
  token: null,
  signIn: () => {},
  signOut: () => {},
  registerUser: () => {},
  isLogged: false,
  user: null,
});

export const AuthProvider: React.FC<ChildrenProps> = ({
  children,
}: ChildrenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [login] = useMutation(LOGIN);
  const [register] = useMutation(REGISTER);
  const [user, setUser] = useState<TokenUser | null>(null);

  useEffect(() => {
    const getToken = async () => {
      if (token) {
        const jwt = jwt_decode<{ user: TokenUser }>(token);
        setUser(jwt.user);
        AsyncStorage.setItem('token', token);
        setIsLogged(true);
      } else {
        setUser(null);
        AsyncStorage.removeItem('token');
        setIsLogged(false);
      }
    };
    getToken();
  }, [token]);

  const registerUser = async (data: RegisterInterface) => {
    try {
      setIsLoading(true);
      const response = await register({
        variables: {
          userRegisterInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      if (response) {
        const responseToken = await login({
          variables: {
            userLoginInput: { email: data.email, password: data.password },
          },
        });
        setToken(responseToken.data.login);
      }
    } catch (error) {
      Alert.alert('A problem occurred during register');
      setToken(null);
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (data: SignInInterface) => {
    try {
      setIsLoading(true);
      const responseToken = await login({
        variables: {
          userLoginInput: { email: data.email, password: data.password },
        },
      });
      setToken(responseToken.data.login);
    } catch (error) {
      Alert.alert('Invalid credentials');
      setToken(null);
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setIsLoading(true);
    setToken(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        registerUser,
        isLoading,
        token,
        isLogged,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

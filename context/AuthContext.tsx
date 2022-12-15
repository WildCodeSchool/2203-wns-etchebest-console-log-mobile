import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';
import { Alert } from 'react-native';
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
  userToken: string | null;
  signIn: (data: SignInInterface) => void;
  signOut: () => void;
  registerUser: (data: RegisterInterface) => void;
  isLogged: boolean;
}
interface ChildrenProps {
  children: JSX.Element;
}

export const AuthContext = createContext<AuthContextInterface>({
  isLoading: false,
  userToken: null,
  signIn: () => {},
  signOut: () => {},
  registerUser: () => {},
  isLogged: false,
});

export const AuthProvider: React.FC<ChildrenProps> = ({
  children,
}: ChildrenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [login, { data: loginData }] = useMutation(LOGIN);
  const [register] = useMutation(REGISTER);

  if (loginData) {
    AsyncStorage.setItem('userToken', loginData.login);
  }

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
        const token = await login({
          variables: {
            userLoginInput: { email: data.email, password: data.password },
          },
        });
        setUserToken(token.data.login);
        AsyncStorage.setItem('userToken', token.data.login);
        setIsLoading(false);
        setIsLogged(true);
      }
    } catch (error) {
      Alert.alert('A problem occurred during register');
      setIsLoading(false);
      setIsLogged(false);
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const signIn = async (data: SignInInterface) => {
    try {
      setIsLoading(true);
      const token = await login({
        variables: {
          userLoginInput: { email: data.email, password: data.password },
        },
      });
      setUserToken(token.data.login);
      AsyncStorage.setItem('userToken', token.data.login);
      setIsLoading(false);
      setIsLogged(true);
    } catch (error) {
      Alert.alert('Invalid credentials');
      setIsLoading(false);
      setIsLogged(false);
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const signOut = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userToken');
    setUserToken(null);
    setIsLoading(false);
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        registerUser,
        isLoading,
        userToken,
        isLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

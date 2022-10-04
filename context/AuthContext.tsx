import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@apollo/client";
import LOGIN from "../lib/queries/login";
import { Alert } from "react-native";
import REGISTER from "../lib/queries/register";
export interface AuthContextInterface {
  isLoading: boolean;
  userToken: string | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  registerUser: (name: string, email: string, password: string) => void;
  isLogged: boolean;
}
interface Props {
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

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [login, { data }] = useMutation(LOGIN);
  const [register, { error }] = useMutation(REGISTER);

  if (data) {
    AsyncStorage.setItem("userToken", data.login);
  }

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      setIsLoading(true);
      const response = await register({
        variables: {
          userRegisterInput: { email: email, password: password, name: name },
        },
      });
      if (response) {
        let token = await login({
          variables: {
            userLoginInput: { email: email, password: password },
          },
        });
        setUserToken(token.data.login);
        AsyncStorage.setItem("userToken", token.data.login);
        console.log("token", token);
        setIsLoading(false);
        setIsLogged(true);
      }
      // console.log(response);
    } catch (error) {
      Alert.alert("A problem occurred during register");
      setIsLoading(false);
      setIsLogged(false);
      console.log(error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      let token = await login({
        variables: {
          userLoginInput: { email: email, password: password },
        },
      });
      setUserToken(token.data.login);
      console.log("token data", token.data);
      AsyncStorage.setItem("userToken", token.data.login);
      setIsLoading(false);
      setIsLogged(true);
    } catch (error) {
      Alert.alert("Invalid credentials");
      setIsLoading(false);
      setIsLogged(false);
      console.log(error);
    }
  };

  const signOut = () => {
    setIsLoading(true);
    AsyncStorage.removeItem("userToken");
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

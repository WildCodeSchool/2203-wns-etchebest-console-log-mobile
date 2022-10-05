import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@apollo/client";
import LOGIN from "../lib/queries/login";
import { Alert } from "react-native";

export interface AuthContextInterface {
  isLoading: boolean;
  userToken: string | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
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
  isLogged: false,
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [login, { data }] = useMutation(LOGIN);
  const [isLogged, setIsLogged] = useState(false);

  if (data) {
    AsyncStorage.setItem("userToken", data.login);
  }

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
      value={{ signIn, signOut, isLoading, userToken, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

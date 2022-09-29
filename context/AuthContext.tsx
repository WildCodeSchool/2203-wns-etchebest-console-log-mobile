import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@apollo/client";
import LOGIN from "../lib/queries/login";

interface AuthContextInterface {
  isLoading: boolean;
  userToken: string | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [login, { data }] = useMutation(LOGIN);

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
      AsyncStorage.setItem("userToken", token.data.login);
      setIsLoading(false);
    } catch (error) {
      alert("Invalid credentials");
      setIsLoading(false);
      console.log(error);
    }
  };

  const signOut = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(`isLogged error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

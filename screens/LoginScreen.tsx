import { useContext, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = () => {
    signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Console.log</Text>
      <View style={styles.containerLog}>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={onSignInPress}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#73c6ce4d",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    color: "#146B70",
  },
  text: {
    textAlign: "center",
  },
  containerLog: {
    width: "100%",
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 5,
    border: "1px solid white",
    backgroundColor: "white",
  },
  loginBtn: {
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    backgroundColor: "#146B70",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  loginText: {
    color: "white",
  },
});

export default LoginScreen;

import { useContext, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen = () => {
  const { registerUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegisterPress = () => {
    registerUser(name, email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register for free</Text>
      <View style={styles.containerForm}>
        <TextInput
          value={name}
          onChangeText={(name) => setName(name)}
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoFocus={true}
        />
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
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={onRegisterPress}
          disabled={!email || !password || !name}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  containerForm: {
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
    paddingHorizontal: 55,
  },
  loginText: {
    color: "white",
  },
});
export default RegisterScreen;

import { NavigationProp } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen = ({ navigation }: RouterProps) => {
  const { isLogged, signOut } = useContext(AuthContext);

  // useEffect(() => {
  //   signOut();
  // }, []);

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <Image
        source={require("../assets/logoHomePage.png")}
        style={{
          width: 350,
          height: 200,
          borderRadius: 20,
        }}
      />
      {!isLogged ? (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textInButton}>Sign in</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#146b70",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#F6FDFE",
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  textInButton: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutBtn: {
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
  logoutText: {
    color: "white",
  },
});
export default HomeScreen;

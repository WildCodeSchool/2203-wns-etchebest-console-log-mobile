import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen = ({ navigation }: RouterProps) => {
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
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textInButton}>Authentificate</Text>
        </TouchableOpacity>
      </View>
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
});
export default HomeScreen;

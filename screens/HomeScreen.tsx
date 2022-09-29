import React from "react";
import { StyleSheet, View, Image, Button } from "react-native";

const HomeScreen = ({ navigation }: any) => {
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
      <View style={styles.button}>
        <Button
          title="Se connecter"
          color="#031011"
          onPress={() => navigation.navigate("Login")}
        />
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
    padding: 10,
    marginTop: 40,
  },
});
export default HomeScreen;

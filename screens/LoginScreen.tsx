import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={[styles.container]}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textInButton}>▶︎ Back to home ◀︎ </Text>
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

export default LoginScreen;

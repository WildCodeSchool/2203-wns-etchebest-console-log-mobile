import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const LoginScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text>Login</Text>
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
});

export default LoginScreen;

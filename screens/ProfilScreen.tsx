import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#146b70",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfilScreen;

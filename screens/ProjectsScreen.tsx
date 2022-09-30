import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Projects</Text>
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

export default ProjectsScreen;

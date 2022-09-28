import { useState, useEffect, useRef } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import StatusCard from "../components/StatusCard";

const TicketsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true}>
        <StatusCard title="TO DO" />
        <StatusCard title="IN PROGRESS" />
        <StatusCard title="DONE" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#e8e8e8",
    paddingTop: 20,
    paddingBottom: 20,
    height: "100%",
  },
});

export default TicketsScreen;

import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

interface Props {
  title: string;
  tickets?: any[];
}

const StatusCard: React.FC<Props> = ({ title, tickets }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    width: 250,
    height: 550,
    marginLeft: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default StatusCard;

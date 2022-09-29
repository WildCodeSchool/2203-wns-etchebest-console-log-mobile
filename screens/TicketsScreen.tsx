import { useState, useEffect, useRef } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import StatusCard from "../components/StatusCard";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_TICKETS } from "../utils/ticketRequests";

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

const TicketsScreen = () => {
  const { data, error, loading } = useQuery(GET_ALL_TICKETS);

  if (error) return <Text>Error</Text>;

  const tickets: Ticket[] = data?.tickets || [];
  const toDoTickets = tickets.filter((ticket) => ticket.status === "TODO");
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "IN_PROGRESS"
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === "DONE");

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal={true}>
          <StatusCard title="TO DO" tickets={toDoTickets} />
          <StatusCard title="IN PROGRESS" tickets={inProgressTickets} />
          <StatusCard title="DONE" tickets={doneTickets} />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#2da7be",
    paddingTop: 20,
    paddingBottom: 20,
    height: "100%",
  },
});

export default TicketsScreen;

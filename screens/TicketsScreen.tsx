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
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import StatusCard from "../components/StatusCard";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_TICKETS } from "../lib/queries/ticketRequests";

export interface Ticket {
  id: string;
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
    (ticket) => ticket.status === "DOING"
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === "DONE");

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <StatusCard title="TO DO" type="TODO" tickets={toDoTickets} />
        <StatusCard
          title="IN PROGRESS"
          type="DOING"
          tickets={inProgressTickets}
        />
        <StatusCard title="DONE" type="DONE" tickets={doneTickets} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#146B70",
    paddingVertical: 20,
    height: "100%",
  },
});

export default TicketsScreen;

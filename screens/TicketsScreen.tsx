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
import { gql, useQuery } from "@apollo/client";

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

const GET_ALL_TICKETS = gql`
  query Tickets {
    tickets {
      id
      title
      description
      status
    }
  }
`;

const TicketsScreen = () => {
  const { data, error, loading } = useQuery(GET_ALL_TICKETS);

  if (error) return <Text>Error</Text>;

  const tickets: Ticket[] = data?.tickets;
  const toDoTickets = tickets.filter((ticket) => ticket.status === "TODO");
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "IN_PROGRESS"
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === "DONE");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true}>
        <StatusCard title="TO DO" tickets={toDoTickets} />
        <StatusCard title="IN PROGRESS" tickets={inProgressTickets} />
        <StatusCard title="DONE" tickets={doneTickets} />
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

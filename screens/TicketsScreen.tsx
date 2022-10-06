import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TicketListCard from "../components/Ticket/TicketListCard";
import { GET_ALL_TICKETS } from "../lib/queries/ticketRequests";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: string;
}

const TicketsScreen: React.FC = () => {
  const [enableScroll, setEnableScroll] = useState(true);
  const { data, error, loading } = useQuery(GET_ALL_TICKETS);

  if (error) return <Text>Error</Text>;

  const tickets: Ticket[] = data?.tickets || [];
  const toDoTickets = tickets.filter((ticket) => ticket.status === 'TODO');
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === 'DOING'
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === 'DONE');

  console.log("enableScroll :>> ", enableScroll);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        snapToAlignment="center"
        pagingEnabled
        disableIntervalMomentum
      >
        <TicketListCard
          title="TO DO"
          type="TODO"
          tickets={toDoTickets}
          setEnableScroll={setEnableScroll}
          enableScroll={enableScroll}
        />
        <TicketListCard
          title="IN PROGRESS"
          type="DOING"
          tickets={inProgressTickets}
          setEnableScroll={setEnableScroll}
          enableScroll={enableScroll}
        />
        <TicketListCard
          title="DONE"
          type="DONE"
          tickets={doneTickets}
          setEnableScroll={setEnableScroll}
          enableScroll={enableScroll}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#146B70',
    paddingVertical: 20,
  },
});

export default TicketsScreen;

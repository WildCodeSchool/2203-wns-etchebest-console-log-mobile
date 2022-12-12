import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  LogBox,
} from "react-native";
import TicketListCard from "../components/Ticket/TicketListCard";
import { GET_ALL_TICKETS } from "../lib/queries/ticketRequests";
import DraggableFlatList, {
  NestableScrollContainer,
  NestableDraggableFlatList,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "@react-navigation/stack";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: string;
}

export type TicketStatus = "TODO" | "DOING" | "DONE";

const TicketsScreen: React.FC = () => {
  const { data, error, loading } = useQuery(GET_ALL_TICKETS);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  if (error) return <Text>Error</Text>;

  const tickets: Ticket[] = data?.tickets || [];
  const toDoTickets = tickets.filter((ticket) => ticket.status === 'TODO');
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === 'DOING'
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === 'DONE');

  const ticketsByStatus: { type: TicketStatus; tickets: Ticket[] }[] = [
    { type: "TODO", tickets: toDoTickets },
    { type: "DOING", tickets: inProgressTickets },
    { type: "DONE", tickets: doneTickets },
  ];

  const onRenderItem: ListRenderItem<{
    type: TicketStatus;
    tickets: Ticket[];
  }> = ({ item }) => <TicketListCard type={item.type} tickets={item.tickets} />;

  const onDragRenderItem = ({
    item,
    drag,
    isActive,
  }: {
    item: Ticket;
    drag: any;
    isActive: boolean;
  }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity onLongPress={drag} disabled={isActive}>
          <Text>Ticket</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <View style={styles.container}>
      {/* <NestableScrollContainer>
      <NestableDraggableFlatList
        data={todoTickets}
        renderItem={onDragRenderItem}
        keyExtractor={(item: any) => item.id}
        onDragEnd={({ data }: any) => setTodoTickets(data)}
      />
      <View>
          <Text>TODO</Text>
        </View>
      <NestableDraggableFlatList
        data={doingTickets}
        renderItem={onDragRenderItem}
        keyExtractor={(item) => item.id}
      />
      <View>
          <Text>TODO</Text>
        </View>
      <NestableDraggableFlatList
        data={doneTickets}
        renderItem={onDragRenderItem}
        keyExtractor={(item) => item.id}
      /> */}

      <FlatList
        horizontal={true}
        data={ticketsByStatus}
        renderItem={onRenderItem}
        keyExtractor={(item) => item.type}
      />

      {/* <TicketListCard type="TODO" tickets={toDoTickets} />
      <TicketListCard type="DOING" tickets={doingTickets} />
      <TicketListCard type="DONE" tickets={doneTickets} /> */}
      {/* </NestableScrollContainer> */}
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

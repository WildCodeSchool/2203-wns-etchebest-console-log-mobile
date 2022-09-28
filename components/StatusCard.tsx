import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItem,
} from "react-native";
import { Ticket } from "../screens/TicketsScreen";
import TicketCard from "./TicketCard";

interface Props {
  title: string;
  tickets: Ticket[];
}

const StatusCard: React.FC<Props> = ({ title, tickets }) => {
  const renderTicket: ListRenderItem<Ticket> = ({ item }) => (
    <TicketCard ticket={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        data={tickets}
        renderItem={renderTicket}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
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
  listContainer: {
    padding: 8,
  },
});

export default StatusCard;

import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ticket } from "../screens/TicketsScreen";
import TicketCard from "./TicketCard";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  title: string;
  tickets: Ticket[];
}

const StatusCard: React.FC<Props> = ({ title, tickets }) => {
  const [isCreateTicket, setIsCreateTicket] = useState(false);
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    status: "",
  });

  const onPressAddTicket = () => {
    setIsCreateTicket(true);
  };

  const renderTicket: ListRenderItem<Ticket> = ({ item }) => (
    <TicketCard ticket={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{title}</Text>
      </View>
      <FlatList
        data={tickets}
        renderItem={renderTicket}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
      {isCreateTicket ? (
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={ticket.title} />
          <TouchableOpacity onPress={() => setIsCreateTicket(false)}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <Button title="+ Ajouter une carte" onPress={onPressAddTicket} />
      )}
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default StatusCard;

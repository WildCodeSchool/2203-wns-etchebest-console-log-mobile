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
  Keyboard,
} from "react-native";
import { Ticket } from "../screens/TicketsScreen";
import TicketCard from "./TicketCard";
import { AntDesign } from "@expo/vector-icons";
import { getTicketStatus } from "../utils/functions";
import { gql, useMutation } from "@apollo/client";
import { CREATE_ONE_TICKET, GET_ALL_TICKETS } from "../utils/ticketRequests";

interface Props {
  title: string;
  tickets: Ticket[];
}

const StatusCard: React.FC<Props> = ({ title, tickets }) => {
  const [createOneticket, { data, error }] = useMutation(CREATE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
  });
  const ticketStatus = getTicketStatus(title);
  const [isCreateTicket, setIsCreateTicket] = useState(false);
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    status: ticketStatus,
  });

  const onPressAddTicket = () => {
    setIsCreateTicket(true);
  };

  const onSubmitEditing = () => {
    console.log("Submit ");
    console.log("ticket", ticket);
    createOneticket({
      variables: {
        data: {
          title: ticket.title,
          description: ticket.description,
          status: ticket.status,
        },
      },
    });
    setTicket({ title: "", status: ticketStatus, description: "" });
    setIsCreateTicket(false);
  };

  const onBlur = () => {
    Keyboard.dismiss();
    setIsCreateTicket(false);
    setTicket((current) => ({ ...current, title: "" }));
  };

  const renderTicket: ListRenderItem<Ticket> = ({ item }) => (
    <TicketCard ticket={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <FlatList
        data={tickets}
        renderItem={renderTicket}
        keyExtractor={(item) => item.id.toString()}
      />
      {isCreateTicket ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={ticket.title}
            onChangeText={(newValue) =>
              setTicket((current) => ({ ...current, title: newValue }))
            }
            placeholder="Ticket name"
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
          />
          <TouchableOpacity
            onPress={() => {
              setIsCreateTicket(false);
              setTicket((current) => ({ ...current, title: "" }));
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={onPressAddTicket}>
          <Text style={styles.addButtonText}>+ Add ticket</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2",
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
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    marginLeft: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "green",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#787c7d",
    marginLeft: 3,
    marginBottom: 8,
  },
  addButton: {
    color: "green",
    fontWeight: "800",
  },
  addButtonText: {
    color: "green",
    fontWeight: "800",
    marginLeft: 8,
    letterSpacing: 1,
    fontSize: 15,
  },
});

export default StatusCard;

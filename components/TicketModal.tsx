import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { Ticket } from "../screens/TicketsScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { DELETE_ONE_TICKET, GET_ALL_TICKETS } from "../utils/ticketRequests";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  ticket: Ticket;
}

export const TicketModal: React.FC<Props> = ({ show, setShow, ticket }) => {
  console.log("ticket :>> ", ticket);
  const [deleteTicket, { data, error }] = useMutation(DELETE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
  });

  const onDeleteTicket = () => {
    deleteTicket({
      variables: {
        data: {
          id: ticket.id,
        },
      },
    });
  };

  return (
    <Modal
      style={{ margin: 10, flex: 1 }}
      visible={show}
      animationType="slide"
      onRequestClose={() => setShow(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.actionIcons}>
          <TouchableOpacity onPress={() => setShow(false)} activeOpacity={0.1}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onDeleteTicket();
              setShow(false);
            }}
            activeOpacity={0.1}
          >
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{ticket.title}</Text>
          <Text style={styles.description}>{ticket.description}</Text>
          <View>
            <AntDesign name="user" size={36} color="black" />
            <Text>Username</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  textContainer: {
    flex: 4,
    marginTop: 15,
  },
  description: {
    fontSize: 25,
    marginTop: 10,
  },
  actionIcons: {
    flex: 1 / 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {},
});

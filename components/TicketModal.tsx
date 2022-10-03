import { useMutation } from "@apollo/client";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DELETE_ONE_TICKET,
  GET_ALL_TICKETS,
  UPDATE_ONE_TICKET,
} from "../lib/queries/ticketRequests";
import { Ticket } from "../screens/TicketsScreen";
import { TicketDescription } from "./TicketDescription";
import { TicketStatus } from "./TicketStatus";
import TicketTitle from "./TicketTitle";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  ticket: Ticket;
}

export const TicketModal: React.FC<Props> = ({ show, setShow, ticket }) => {
  const [onTitleEdit, setOnTitleEdit] = useState(false);
  const [onStatusEdit, setOnStatusEdit] = useState(false);
  const [onDescriptionEdit, setOnDescriptionEdit] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [status, setStatus] = useState(ticket.status);
  const [description, setDescription] = useState(ticket.description);

  const [deleteOneTicket, { data, error }] = useMutation(DELETE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
  });
  const [updateOneTicket, { error: updateError }] = useMutation(
    UPDATE_ONE_TICKET,
    {
      refetchQueries: () => [{ query: GET_ALL_TICKETS }],
    }
  );

  const resetInputs = () => {
    setOnTitleEdit(false);
    setOnStatusEdit(false);
    setOnDescriptionEdit(false);
  };

  const onUpdateTicket = () => {
    updateOneTicket({
      variables: {
        where: {
          id: ticket.id,
        },
        data: {
          title: { set: title },
          status: { set: status },
          description: { set: description },
        },
      },
    });
    resetInputs();
    setShow(false);
  };
  const onDeleteTicket = () => {
    deleteOneTicket({
      variables: {
        where: { id: ticket.id },
      },
    });
    setShow(false);
  };

  return (
    <Modal
      style={{ flex: 1 }}
      visible={show}
      animationType="slide"
      onRequestClose={() => {
        resetInputs();
        setShow(false);
      }}
      statusBarTranslucent
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.actionIcons}>
          <TouchableOpacity
            onPress={() => {
              setShow(false);
              resetInputs();
            }}
            activeOpacity={0.1}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteTicket} activeOpacity={0.1}>
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.ticketWrapper}>
          <TicketTitle
            onEdit={onTitleEdit}
            setOnEdit={setOnTitleEdit}
            title={title}
            setTitle={setTitle}
            onUpdateTicket={onUpdateTicket}
          />

          <View style={styles.ticketAttributes}>
            <View style={styles.wrapper}>
              <Ionicons
                name="bookmarks-outline"
                size={24}
                color="black"
                style={styles.iconDetail}
              />
              <Text style={styles.text}>Project</Text>
            </View>

            <TicketStatus
              onEdit={onStatusEdit}
              setOnEdit={setOnStatusEdit}
              status={status}
              setStatus={setStatus}
              onUpdateTicket={onUpdateTicket}
            />

            <View style={styles.wrapper}>
              <Text>Created by </Text>
              <AntDesign name="user" size={16} color="black" />
              <Text>Username</Text>
              <Text> - 10/10/1994</Text>
            </View>
            <View style={styles.wrapper}>
              <Text>Assigned to </Text>
              <AntDesign name="user" size={16} color="black" />
              <Text>Username</Text>
            </View>

            <TicketDescription
              onEdit={onDescriptionEdit}
              setOnEdit={setOnDescriptionEdit}
              description={description}
              setDescription={setDescription}
              onUpdateTicket={onUpdateTicket}
              ticket={ticket}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f3",
  },
  ticketAttributes: {
    flex: 2,
    marginTop: 20,
  },
  wrapper: {
    flex: 1 / 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
    paddingLeft: 15,
    marginHorizontal: 5,
    borderRadius: 4,
    backgroundColor: "white",
  },
  ticketWrapper: {
    flex: 4,
    paddingTop: 15,
  },
  iconDetail: {
    marginRight: 10,
  },
  actionIcons: {
    flex: 1 / 6,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
  },
  safeAreaView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

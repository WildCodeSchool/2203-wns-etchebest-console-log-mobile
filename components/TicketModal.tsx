import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Ticket } from "../screens/TicketsScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import {
  DELETE_ONE_TICKET,
  GET_ALL_TICKETS,
  UPDATE_ONE_TICKET,
} from "../lib/queries/ticketRequests";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getTicketStatusLabel } from "../utils/functions";
import DropDownPicker from "react-native-dropdown-picker";
import TicketTitle from "./TicketTitle";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { TicketStatus } from "./TicketStatus";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  ticket: Ticket;
}

export const TicketModal: React.FC<Props> = ({ show, setShow, ticket }) => {
  const [onTitleEdit, setOnTitleEdit] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [onStatusEdit, setOnStatusEdit] = useState(false);
  const [status, setStatus] = useState(ticket.status);
  const [onDescriptionEdit, setOnDescriptionEdit] = useState(false);
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
    setOnTitleEdit(false);
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
      onRequestClose={() => setShow(false)}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.actionIcons}>
          <TouchableOpacity onPress={() => setShow(false)} activeOpacity={0.1}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteTicket} activeOpacity={0.1}>
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.textWrapper}>
          <TicketTitle
            onEdit={onTitleEdit}
            setOnEdit={setOnTitleEdit}
            title={title}
            setTitle={setTitle}
            onUpdateTicket={onUpdateTicket}
          />

          <View style={styles.detailsWrapper}>
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

            <View style={[styles.wrapper, styles.descriptionWrapper]}>
              <Text style={styles.description}>
                {ticket.description ? ticket.description : "No description"}
              </Text>
            </View>
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
  detailsWrapper: {
    flex: 2,
    marginTop: 20,
  },
  wrapper: {
    flex: 1 / 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "yellow",
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
  },
  textWrapper: {
    flex: 4,
    paddingTop: 15,
    backgroundColor: "blue",
  },
  iconDetail: {
    marginRight: 10,
  },
  descriptionWrapper: {
    flex: 1 / 4,
  },
  description: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#4C4C4C",
    marginTop: 20,
    marginBottom: 15,
  },
  actionIcons: {
    flex: 1 / 6,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "gray",
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

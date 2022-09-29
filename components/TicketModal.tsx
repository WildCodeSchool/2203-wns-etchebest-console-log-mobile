import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
} from "react-native";
import { Ticket } from "../screens/TicketsScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import {
  DELETE_ONE_TICKET,
  GET_ALL_TICKETS,
  UPDATE_ONE_TICKET,
} from "../utils/ticketRequests";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getTicketStatusLabel } from "../utils/functions";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  ticket: Ticket;
}

export const TicketModal: React.FC<Props> = ({ show, setShow, ticket }) => {
  console.log("ticket :>> ", ticket);
  const [deleteOneTicket, { data, error }] = useMutation(DELETE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
  });
  const [updateOneTicket, { error: updateError }] = useMutation(
    UPDATE_ONE_TICKET,
    {
      refetchQueries: () => [{ query: GET_ALL_TICKETS }],
    }
  );

  const [onEdit, setOnEdit] = useState({
    title: false,
    status: false,
    description: false,
  });
  const [updatedTicket, setUpdatedTicket] = useState({
    title: ticket.title,
    status: ticket.status,
    description: ticket.description,
  });

  const [selectStatusVisible, setSelectStatusVisible] = useState(false);

  const onUpdateTicket = () => {
    updateOneTicket({
      variables: {
        where: {
          id: ticket.id,
        },
        data: {
          id: { set: ticket.id },
          title: { set: updatedTicket.title },
          status: { set: updatedTicket.status },
          description: { set: updatedTicket.description },
        },
      },
    });
    setOnEdit((current) => ({
      ...current,
      title: false,
    }));
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
      style={{ margin: 10, flex: 1 }}
      visible={show}
      animationType="slide"
      onRequestClose={() => setShow(false)}
    >
      <View style={styles.container}>
        <View style={styles.actionIcons}>
          <TouchableOpacity onPress={() => setShow(false)} activeOpacity={0.1}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteTicket} activeOpacity={0.1}>
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.textWrapper}>
          <View>
            {onEdit.title ? (
              <View style={styles.titleWrapper}>
                <TextInput
                  value={updatedTicket.title}
                  onChangeText={(newValue) =>
                    setUpdatedTicket((current) => ({
                      ...current,
                      title: newValue,
                    }))
                  }
                  style={[styles.title, styles.inputTitle]}
                  onSubmitEditing={onUpdateTicket}
                  blurOnSubmit
                  multiline
                />
                <TouchableOpacity
                  onPress={() =>
                    setOnEdit((current) => ({
                      ...current,
                      title: false,
                    }))
                  }
                >
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  setOnEdit((current) => ({
                    ...current,
                    title: !current.title,
                  }))
                }
                style={styles.titleWrapper}
              >
                <Text style={styles.title}>{ticket.title}</Text>
                <FontAwesome name="pencil" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>

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

            {onEdit.status ? (
              <View>
                {/* <TextInput
                  value={title}
                  onChangeText={(newValue) => setTitle(newValue)}
                  onSubmitEditing={onUpdateTicket}
                  blurOnSubmit
                  multiline
                /> */}
                <TouchableOpacity
                  onPress={() =>
                    setOnEdit((current) => ({
                      ...current,
                      status: false,
                    }))
                  }
                >
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() =>
                  setOnEdit((current) => ({
                    ...current,
                    status: !current.title,
                  }))
                }
              >
                <MaterialCommunityIcons
                  name="list-status"
                  size={24}
                  color="black"
                  style={styles.iconDetail}
                />
                <Text style={styles.text}>
                  {getTicketStatusLabel(ticket.status)}
                </Text>
              </TouchableOpacity>
            )}

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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f3",
    paddingTop: 20,
  },
  detailsWrapper: {
    flex: 1,
    marginTop: 20,
  },
  wrapper: {
    flex: 1 / 10,
    flexDirection: "row",
    alignItems: "center",
    blockSize: "fit-content",
    backgroundColor: "white",
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
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 4,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginRight: 10,
  },
  inputTitle: {
    backgroundColor: "white",
    padding: 2,
    paddingLeft: 5,
    width: "90%",
    borderRadius: 4,
  },
  textWrapper: {
    flex: 4,
    marginTop: 15,
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
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 16,
  },
});

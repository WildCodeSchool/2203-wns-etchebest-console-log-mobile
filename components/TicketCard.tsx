import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Button,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Ticket } from "../screens/TicketsScreen";
import { AntDesign } from "@expo/vector-icons";
import { TicketModal } from "./TicketModal";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
interface Props {
  ticket: Ticket;
}

const TicketCard: React.FC<Props> = ({ ticket }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TicketModal show={showModal} setShow={setShowModal} ticket={ticket} />
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.container}
      >
        <Text>{ticket.title}</Text>
        <Text>{ticket.description}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 5,
    padding: 5,
    margin: 5,
  },
  userWrapper: {
    flex: 1,
    flexDirection: "row",
  },
});

export default TicketCard;

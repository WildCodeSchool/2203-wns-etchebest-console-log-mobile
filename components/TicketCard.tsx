import React, { useState } from "react";
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
interface Props {
  ticket: Ticket;
}

const TicketCard: React.FC<Props> = ({ ticket }) => {
  const [showModal, setShowModal] = useState(false);
  const [isCreateTicket, setIsCreateTicket] = useState(false);

  const onPress = () => {
    setShowModal(true);
  };

  return (
    <>
      <Modal
        style={{ margin: 10, flex: 1 }}
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
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
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text>{ticket.title}</Text>
          <Text>{ticket.description}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 3,
    marginTop: 5,
    padding: 5,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  textContainer: {
    marginTop: 15,
  },
  description: {
    fontSize: 25,
    marginTop: 10,
  },
  userWrapper: {
    flex: 1,
    flexDirection: "row",
  },
});

export default TicketCard;

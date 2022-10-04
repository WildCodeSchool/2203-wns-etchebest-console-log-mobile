import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ticket } from "../screens/TicketsScreen";
import { TicketModal } from "./TicketModal";
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
        <Text style={styles.ticketTitle}>{ticket.title}</Text>
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
  ticketTitle: {
    color: "#146B70",
    fontWeight: "600",
  },
});

export default TicketCard;

import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ticket } from "../screens/TicketsScreen";

interface Props {
  ticket: Ticket;
}

const TicketCard: React.FC<Props> = ({ ticket }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text>{ticket.title}</Text>
        <Text>{ticket.description}</Text>
      </View>
    </TouchableOpacity>
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
});

export default TicketCard;

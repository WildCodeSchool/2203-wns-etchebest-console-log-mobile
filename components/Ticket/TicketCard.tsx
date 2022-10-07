import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ticket } from "../../screens/TicketsScreen";
import { TicketModal } from "./TicketModal";
import SwipeableItem, {
  useSwipeableItemParams,
  useOverlayParams,
} from "react-native-swipeable-item";
import { getTicketStatusOptions } from "../../utils/functions";
interface Props {
  ticket: Ticket;
  onUpdateTicket: (id: string, status: string) => void;
}

interface UnderlayProps {
  ticket: Ticket;
  type: string;
  onUpdateTicket: (id: string, status: string) => void;
}

const Underlay: React.FC<UnderlayProps> = ({
  ticket,
  type,
  onUpdateTicket,
}) => {
  const { close } = useSwipeableItemParams();
  const [newStatus, setNewStatus] = useState("");
  const options = getTicketStatusOptions(ticket.status);
  const selectedOption = type === "right" ? options.a : options.b;

  const alignSelf = type === "left" ? "flex-end" : "flex-start";

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={[styles.swipeWrapper, { alignSelf: alignSelf }]}
        onPress={() => {
          onUpdateTicket(ticket.id, selectedOption.value);
          close();
        }}
      >
        <Text style={[styles.swipeText]}>
          {type === "right" ? options.a.label : options.b.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const TicketCard: React.FC<Props> = ({ ticket, onUpdateTicket }) => {
  const [showModal, setShowModal] = useState(false);
  const [swipeable, setSwipeable] = useState(false);

  return (
    <>
      <TicketModal show={showModal} setShow={setShowModal} ticket={ticket} />
      <SwipeableItem
        key={ticket.id}
        item={ticket}
        onChange={() => {
          console.log("change swipe item");
        }}
        renderUnderlayLeft={() => (
          <Underlay
            ticket={ticket}
            type="left"
            onUpdateTicket={onUpdateTicket}
          />
        )}
        renderUnderlayRight={() => (
          <Underlay
            ticket={ticket}
            type="right"
            onUpdateTicket={onUpdateTicket}
          />
        )}
        snapPointsLeft={[70]}
        snapPointsRight={[70]}
      >
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}
          style={styles.container}
        >
          <Text style={styles.ticketTitle}>{ticket.title}</Text>
          <Text>{ticket.description}</Text>
        </TouchableOpacity>
      </SwipeableItem>
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
  swipeWrapper: {
    flex: 1,
    width: "30%",
    justifyContent: "center",
  },
  swipeText: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 15,
    textAlign: "center",
  },
});

export default TicketCard;

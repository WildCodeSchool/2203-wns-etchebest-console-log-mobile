import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ticket, TicketStatus } from '../../src/gql/graphql';
import COLORS from '../../styles/colors';
import TicketModal from './TicketModal';
import TicketSwipeView from './TicketSwipeView';

interface Props {
  ticket: Ticket;
  onUpdateTicket: (id: string, status: TicketStatus) => void;
  onDeleteTicket: (id: string) => void;
  index: number;
  closePreviousRow: (index: number) => void;
  updateSwipeRows: (swipeRef: Swipeable, index: number) => void;
}

const TicketCard: React.FC<Props> = ({
  ticket,
  onUpdateTicket,
  index,
  closePreviousRow,
  updateSwipeRows,
  onDeleteTicket,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Swipeable
      ref={(ref) => {
        if (ref) updateSwipeRows(ref, index);
      }}
      renderRightActions={() => (
        <TicketSwipeView
          type="left"
          ticket={ticket}
          onUpdateTicket={onUpdateTicket}
          onDeleteTicket={onDeleteTicket}
        />
      )}
      renderLeftActions={() => (
        <TicketSwipeView
          type="right"
          ticket={ticket}
          onUpdateTicket={onUpdateTicket}
        />
      )}
      onSwipeableOpen={() => closePreviousRow(index)}
      activateAfterLongPress={500}
    >
      <TicketModal show={showModal} setShow={setShowModal} ticket={ticket} />
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={styles.container}
      >
        <Text style={styles.ticketTitle}>{ticket.title}</Text>
        <Text>{ticket.description}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 3,
    elevation: 3,
    flex: 1,
    marginTop: 5,
    margin: 5,
    padding: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  ticketTitle: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default TicketCard;

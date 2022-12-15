import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ticket } from '../../screens/TicketsScreen';
import { TicketModal } from './TicketModal';
import TicketSwipeView from './TicketSwipeView';

interface Props {
  ticket: Ticket;
  onUpdateTicket: (id: string, status: string) => void;
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
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 3,
    shadowColor: '#000',
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
    flexDirection: 'row',
  },
  ticketTitle: {
    color: '#146B70',
    fontWeight: '600',
  },
});

export default TicketCard;

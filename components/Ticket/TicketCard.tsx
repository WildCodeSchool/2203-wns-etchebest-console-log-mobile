import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ticket } from '../../screens/TicketsScreen';
import { getSwipeBgColor, getTicketStatusOptions } from '../../utils/functions';
import { TicketModal } from './TicketModal';

interface Props {
  ticket: Ticket;
  onUpdateTicket: (id: string, status: string) => void;
  onDeleteTicket: (id: string) => void;
  index: number;
  closePreviousRow: (index: number) => void;
  updateSwipeRows: (swipeRef: Swipeable, index: number) => void;
}

const swipeView = (
  ticket: Ticket,
  type: string,
  onUpdateTicket: (id: string, status: string) => void,
  onDeleteTicket?: (id: string) => void
) => {
  const isRightView = type === 'right';
  const options = getTicketStatusOptions(ticket.status);
  const option = isRightView ? options.a : options.b;

  return (
    <View
      style={[
        styles.swipeWrapper,
        {
          backgroundColor: getSwipeBgColor(option.value),
        },
      ]}
    >
      <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={() => {
          if (option.value === 'DELETE' && onDeleteTicket) {
            onDeleteTicket(ticket.id);
          }
          onUpdateTicket(ticket.id, option.value);
        }}
      >
        <Text style={[styles.swipeText]}>{option.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

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
      renderRightActions={() =>
        swipeView(ticket, 'left', onUpdateTicket, onDeleteTicket)
      }
      renderLeftActions={() => swipeView(ticket, 'right', onUpdateTicket)}
      onSwipeableOpen={() => closePreviousRow(index)}
      activateAfterLongPress={500}
    >
      <TicketModal show={showModal} setShow={setShowModal} ticket={ticket} />
      <TouchableOpacity
        onPress={() => setShowModal(true)}
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
  swipeWrapper: {
    width: 90,
    justifyContent: 'center',
    backgroundColor: 'pink',
    marginVertical: 4,
  },
  swipeText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'gray',
    fontSize: 15,
  },
});

export default TicketCard;

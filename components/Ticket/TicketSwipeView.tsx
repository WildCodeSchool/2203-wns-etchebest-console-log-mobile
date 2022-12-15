import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ticket } from '../../screens/TicketsScreen';
import { getSwipeBgColor, getTicketStatusOptions } from '../../utils/functions';

interface Props {
  ticket: Ticket;
  type: string;
  onUpdateTicket: (id: string, status: string) => void;
  onDeleteTicket?: (id: string) => void;
}

const TicketSwipeView: React.FC<Props> = ({
  ticket,
  type,
  onUpdateTicket,
  onDeleteTicket,
}) => {
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

const styles = StyleSheet.create({
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

export default TicketSwipeView;

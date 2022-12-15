import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ticket, TicketStatus } from '../../src/gql/graphql';
import COLORS from '../../styles/colors';
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
  const options = getTicketStatusOptions(ticket.status as TicketStatus);
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
        <Text style={styles.swipeText}>{option.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeText: {
    color: COLORS.lightGray,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  swipeWrapper: {
    justifyContent: 'center',
    marginVertical: 4,
    width: 90,
  },
});

export default TicketSwipeView;

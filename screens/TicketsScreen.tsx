import { useQuery } from '@apollo/client';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import React, { useEffect } from 'react';
import {
  FlatList,
  ListRenderItem,
  LogBox,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TicketList from '../components/Ticket/TicketList';
import { GET_ALL_TICKETS } from '../lib/queries/ticketRequests';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: string;
}

export type TicketStatus = 'TODO' | 'DOING' | 'DONE';

const TicketsScreen: React.FC = () => {
  const { data, error, loading } = useQuery(GET_ALL_TICKETS);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  if (error) return <Text>Error</Text>;

  const tickets: Ticket[] = data?.tickets || [];
  const toDoTickets = tickets.filter((ticket) => ticket.status === 'TODO');
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === 'DOING'
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === 'DONE');

  const ticketsByStatus: { type: TicketStatus; tickets: Ticket[] }[] = [
    { type: 'TODO', tickets: toDoTickets },
    { type: 'DOING', tickets: inProgressTickets },
    { type: 'DONE', tickets: doneTickets },
  ];

  const onRenderItem: ListRenderItem<{
    type: TicketStatus;
    tickets: Ticket[];
  }> = ({ item }) => <TicketList type={item.type} tickets={item.tickets} />;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AntDesign name="infocirlce" size={18} color="white" />
        <Text style={styles.infoText}>Long press to swipe</Text>
      </View>
      <FlatList
        horizontal
        data={ticketsByStatus}
        renderItem={onRenderItem}
        keyExtractor={(item) => item.type}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#146B70',
    paddingBottom: 20,
    paddingTop: 10,
  },
  infoContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginBottom: 8,
  },
  infoText: {
    color: '#fff',
    fontStyle: 'italic',
    paddingLeft: 5,
  },
});

export default TicketsScreen;

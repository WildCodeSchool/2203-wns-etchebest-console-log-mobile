import { useQuery } from '@apollo/client';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import { FC, useContext } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import TicketList from '../components/Ticket/TicketList';
import { ProjectContext } from '../context/ProjectContext';
import { GET_ALL_TICKETS } from '../lib/queries/tickets';
import { Ticket, TicketStatus } from '../src/gql/graphql';
import COLORS from '../styles/colors';

const TicketsScreen: FC = () => {
  const { projectId } = useContext(ProjectContext);
  console.log('project', projectId);
  const { data, error, loading } = useQuery(GET_ALL_TICKETS);

  if (error) return <Text>Error</Text>;

  const tickets: Ticket[] = data?.tickets || [];
  const toDoTickets = tickets.filter(
    (ticket) => ticket.status === TicketStatus.Todo
  );
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === TicketStatus.Doing
  );
  const doneTickets = tickets.filter(
    (ticket) => ticket.status === TicketStatus.Done
  );

  const ticketsByStatus: { status: TicketStatus; tickets: Ticket[] }[] = [
    { status: TicketStatus.Todo, tickets: toDoTickets },
    { status: TicketStatus.Doing, tickets: inProgressTickets },
    { status: TicketStatus.Done, tickets: doneTickets },
  ];

  const onRenderItem: ListRenderItem<{
    status: TicketStatus;
    tickets: Ticket[];
  }> = ({ item }) => <TicketList status={item.status} tickets={item.tickets} />;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AntDesign name="infocirlce" size={18} color="white" />
        <Text style={styles.infoText}>Long press to swipe</Text>
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          horizontal
          data={ticketsByStatus}
          renderItem={onRenderItem}
          keyExtractor={(item) => item.status}
          nestedScrollEnabled={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 10,
  },
  infoContainer: {
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    marginBottom: 8,
    marginLeft: 8,
  },
  infoText: {
    color: COLORS.white,
    fontStyle: 'italic',
    paddingLeft: 5,
  },
});

export default TicketsScreen;

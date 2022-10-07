import { useQuery } from '@apollo/client';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AllTicketsCard from '../components/AllTicketsCard';
import { GET_ALL_TICKETS } from '../lib/queries/ticketRequests';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: string;
}

const TicketsScreen = () => {
  const { data, error, loading } = useQuery(GET_ALL_TICKETS);

  if (error) return <Text>Error</Text>;

  const tickets: Ticket[] = data?.tickets || [];
  const toDoTickets = tickets.filter((ticket) => ticket.status === 'TODO');
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === 'DOING'
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === 'DONE');

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AllTicketsCard title="TO DO" type="TODO" tickets={toDoTickets} />
        <AllTicketsCard
          title="IN PROGRESS"
          type="DOING"
          tickets={inProgressTickets}
        />
        <AllTicketsCard title="DONE" type="DONE" tickets={doneTickets} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#146B70',
    paddingVertical: 20,
  },
});

export default TicketsScreen;

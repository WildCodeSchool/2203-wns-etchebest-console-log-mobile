import React from 'react';
import {
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItem,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { globalStyles } from '../../constants/globalStyles';
import { Ticket, TicketStatus } from '../../src/gql/graphql';
import COLORS from '../../styles/colors';
import { getRequestVariables, statusLabel } from '../../utils/functions';
import TicketCard from './TicketCard';
import useTicketMutations from '../../utils/hook';
import QuickAddInput, { Entity } from '../QuickAddInput';

interface Props {
  status: TicketStatus;
  tickets: Ticket[];
}

const TicketListCard: React.FC<Props> = ({ tickets, status }) => {
  const title = statusLabel[status];

  const cardDimension = Dimensions.get('window').width * 0.8;

  const { updateOneTicket, deleteOneTicket } = useTicketMutations();

  const swipeRows: { rows: Swipeable[]; prevOpenedRow: Swipeable | undefined } =
    {
      rows: [],
      prevOpenedRow: undefined,
    };
  const updateSwipeRows = (swipeRef: Swipeable, index: number) => {
    swipeRows.rows[index] = swipeRef;
  };
  const closePreviousRow = (index: number) => {
    if (
      swipeRows.prevOpenedRow &&
      swipeRows.prevOpenedRow !== swipeRows.rows[index]
    ) {
      swipeRows.prevOpenedRow.close();
    }
    swipeRows.prevOpenedRow = swipeRows.rows[index];
  };

  const onUpdateTicket = (id: string, newStatus: TicketStatus) => {
    const variables = getRequestVariables({ status: newStatus }, id, true);
    updateOneTicket({ ...variables });
  };

  const onDelete = (id: string) => {
    const variables = getRequestVariables({}, id);
    deleteOneTicket({ ...variables });
  };

  const renderTicket: ListRenderItem<Ticket> = ({ item, index }) => (
    <TicketCard
      ticket={item}
      onUpdateTicket={onUpdateTicket}
      onDeleteTicket={onDelete}
      closePreviousRow={closePreviousRow}
      index={index}
      updateSwipeRows={updateSwipeRows}
    />
  );
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={[
            styles.container,
            globalStyles.ticketListShadow,
            { width: cardDimension },
          ]}
        >
          <Text style={styles.cardTitle}>{title}</Text>
          <FlatList
            data={tickets}
            renderItem={renderTicket}
            keyExtractor={(item) => item.id.toString()}
            style={{
              height: 300,
            }}
          />
          <QuickAddInput entity={Entity.Ticket} status={status} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 3,
  },
  container: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 8,
  },
});

export default TicketListCard;

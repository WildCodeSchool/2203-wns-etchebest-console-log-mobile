import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
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
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { globalStyles } from '../../constants/globalStyles';
import { Ticket } from '../../src/gql/graphql';
import COLORS from '../../styles/colors';
import {
  getTicketRequestVariables,
  ticketStatusLabel,
} from '../../utils/functions';
import TicketCard from './TicketCard';
import useTicketMutations from '../../utils/hook';

interface Props {
  type: 'TODO' | 'DOING' | 'DONE';
  tickets: Ticket[];
}

const TicketListCard: React.FC<Props> = ({ tickets, type }) => {
  const title = ticketStatusLabel[type];
  const [isAddingTicket, setIsAddingTicket] = useState(false);
  const [ticket, setTicket] = useState({
    title: '',
    status: type,
  });
  const cardDimension = Dimensions.get('window').width * 0.8;

  const { createOneTicket, updateOneTicket, deleteOneTicket } =
    useTicketMutations();

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

  const onSubmitEditing = () => {
    const variables = getTicketRequestVariables({
      title: ticket.title,
      status: ticket.status,
    });
    createOneTicket({ ...variables });
    setTicket({ title: '', status: type });
    setIsAddingTicket(false);
  };

  const onUpdateTicket = (id: string, status: string) => {
    const variables = getTicketRequestVariables({ status }, id, true);
    updateOneTicket({ ...variables });
  };

  const onBlur = () => {
    Keyboard.dismiss();
    setIsAddingTicket(false);
    setTicket((current) => ({ ...current, title: '' }));
  };

  const onDelete = (id: string) => {
    const variables = getTicketRequestVariables({}, id);
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
          {isAddingTicket ? (
            <View style={styles.inputContainer}>
              <TextInput
                autoFocus
                style={styles.input}
                value={ticket.title}
                onChangeText={(newValue) =>
                  setTicket((current) => ({ ...current, title: newValue }))
                }
                placeholder="Ticket name"
                onSubmitEditing={onSubmitEditing}
                onBlur={onBlur}
              />
              <TouchableOpacity
                onPress={() => {
                  setTicket((current) => ({ ...current, title: '' }));
                  setIsAddingTicket(false);
                }}
              >
                <AntDesign
                  name="close"
                  size={24}
                  color="black"
                  style={styles.closeInputButton}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setIsAddingTicket(true)}>
              <Text style={styles.addButtonText}>+ Add ticket</Text>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  addButtonText: {
    color: COLORS.green,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    marginLeft: 8,
  },
  cardTitle: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 3,
  },
  closeInputButton: {
    marginLeft: 5,
  },
  container: {
    backgroundColor: COLORS.whiteGray,
    borderRadius: 10,
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 8,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: COLORS.green,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderWidth: 1,
    flex: 1,
    height: 40,
    padding: 10,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 8,
  },
});

export default TicketListCard;

import { useMutation } from '@apollo/client';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
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
import {
  CREATE_ONE_TICKET,
  GET_ALL_TICKETS,
} from '../lib/queries/ticketRequests';
import { Ticket } from '../screens/TicketsScreen';
import TicketCard from './TicketCard';

interface Props {
  type: 'TODO' | 'DOING' | 'DONE';
  title: string;
  tickets: Ticket[];
}

const AllTicketsCard: React.FC<Props> = ({ title, tickets, type }) => {
  const [isAddingTicket, setIsAddingTicket] = useState(false);
  const [ticket, setTicket] = useState({
    title: '',
    status: type,
  });

  const [createOneticket, { data, error }] = useMutation(CREATE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
  });

  const onPressAddTicket = () => {
    setIsAddingTicket(true);
  };
  const onSubmitEditing = () => {
    createOneticket({
      variables: {
        data: {
          title: ticket.title,
          status: ticket.status,
        },
      },
    });
    setTicket({ title: '', status: type });
    setIsAddingTicket(false);
  };

  const onBlur = () => {
    Keyboard.dismiss();
    setIsAddingTicket(false);
    setTicket((current) => ({ ...current, title: '' }));
  };

  const renderTicket: ListRenderItem<Ticket> = ({ item }) => (
    <TicketCard ticket={item} />
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
            title === 'DONE' ? styles.lastContainer : undefined,
          ]}
        >
          <View>
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
          <FlatList
            data={tickets}
            renderItem={renderTicket}
            keyExtractor={(item) => item.id.toString()}
          />
          {isAddingTicket ? (
            <View style={styles.inputContainer}>
              <TextInput
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
            <TouchableOpacity onPress={onPressAddTicket}>
              <Text style={styles.addButtonText}>+ Add ticket</Text>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  addButton: {
    color: 'green',
    fontWeight: '800',
  },
  addButtonText: {
    color: 'green',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    marginLeft: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#146B70',
    // color: "#787c7d",
    marginLeft: 3,
    marginBottom: 8,
  },
  closeInputButton: {
    marginLeft: 5,
  },
  container: {
    backgroundColor: '#edf2f3',
    borderRadius: 10,
    elevation: 5,
    flex: 1,
    height: 580,
    marginLeft: 20,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 250,
  },
  globalContainer: {
    flex: 1,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'green',
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
  lastContainer: {
    marginRight: 20,
  },
});

export default AllTicketsCard;

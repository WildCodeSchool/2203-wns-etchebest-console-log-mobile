import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../constants/globalStyles';
import { Project, Ticket } from '../../screens/TicketsScreen';
import { getTicketRequestVariables } from '../../utils/functions';
import { useTicketMutations } from '../../utils/hook';
import { TicketDescription } from './TicketDescription';
import { SelectStatus } from './SelectStatus';
import TicketTitle from './TicketTitle';
import { useQuery } from '@apollo/client';

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  ticket: Ticket;
}
export interface EditMode {
  title: boolean;
  status: boolean;
  description: boolean;
}

export const TicketModal: React.FC<Props> = ({ show, setShow, ticket }) => {
  const [status, setStatus] = useState(ticket.status); // MANDATORY TO ISOLATE STATE FOR DROPDOWNPICKER
  const [editStatus, setEditStatus] = useState(false); // MANDATORY TO ISOLATE STATE FOR DROPDOWNPICKER
  const [editMode, setEditMode] = useState<Partial<EditMode>>({
    title: false,
    description: false,
  });
  const [ticketInput, setTicketInput] = useState<Partial<Ticket>>({
    title: ticket.title,
    status,
    description: ticket.description,
  });

  const { updateOneTicket, deleteOneTicket } = useTicketMutations();

  if (!show) return null;

  const resetEditInputs = () => {
    setEditMode({
      title: false,
      description: false,
    });
    setEditStatus(false);
  };

  const onUpdateTicket = () => {
    const variables = getTicketRequestVariables(
      {
        title: ticketInput.title || '',
        status,
        description: ticketInput.description || '',
      },
      ticket.id,
      true
    );
    updateOneTicket({ ...variables });
    resetEditInputs();
  };
  const onDeleteTicket = () => {
    const variables = getTicketRequestVariables({}, ticket.id);
    deleteOneTicket({ ...variables });
    setShow(false);
  };

  return (
    <Modal
      style={{ flex: 1 }}
      visible={show}
      animationType="slide"
      onRequestClose={() => {
        resetEditInputs();
        setShow(false);
      }}
      onDismiss={() => setShow(false)}
      statusBarTranslucent
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.actionIcons}>
          <TouchableOpacity
            onPress={() => {
              setShow(false);
              resetEditInputs();
            }}
            activeOpacity={0.1}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteTicket} activeOpacity={0.1}>
            <Feather name="trash-2" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.ticketWrapper}>
          <TicketTitle
            onEdit={!!editMode.title}
            setOnEdit={setEditMode}
            title={ticketInput.title || ''}
            setTicketInput={setTicketInput}
            onUpdateTicket={onUpdateTicket}
          />
          <View style={styles.ticketAttributes}>
            <View style={[globalStyles.ticketCard]}>
              <Ionicons
                name="bookmarks-outline"
                size={24}
                color="black"
                style={styles.listIcon}
              />
              <Text style={styles.text}>Project</Text>
            </View>

            <SelectStatus
              onEdit={editStatus}
              setOnEdit={setEditStatus}
              status={status}
              setStatus={setStatus}
              onUpdateTicket={onUpdateTicket}
            />
            <TicketDescription
              onEdit={!!editMode.description}
              setOnEdit={setEditMode}
              description={ticketInput.description || ''}
              setTicketInput={setTicketInput}
              onUpdateTicket={onUpdateTicket}
              ticket={ticket}
            />

            <View style={globalStyles.ticketCard}>
              <Text>Created by </Text>
              <AntDesign name="user" size={16} color="black" />
              <Text>Username</Text>
              <Text> - 10/10/1994</Text>
            </View>
            <View style={globalStyles.ticketCard}>
              <Text>Assigned to </Text>
              <AntDesign name="user" size={16} color="black" />
              <Text>Username</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f3',
  },
  actionIcons: {
    flex: 1 / 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  ticketWrapper: {
    flex: 4,
    paddingTop: 15,
  },
  ticketAttributes: {
    flex: 1,
    marginTop: 20,
  },
  listIcon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

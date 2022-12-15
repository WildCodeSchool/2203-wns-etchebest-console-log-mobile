import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import { Ticket } from '../../screens/TicketsScreen';
import { EditMode } from './TicketModal';

interface Props {
  description: string;
  setTicketInput: Dispatch<SetStateAction<Partial<Ticket>>>;
  onEdit: boolean;
  setOnEdit: Dispatch<SetStateAction<Partial<EditMode>>>;
  onUpdateTicket: () => void;
  ticket: Ticket;
}

export const TicketDescription: React.FC<Props> = ({
  description,
  setTicketInput,
  onEdit,
  setOnEdit,
  onUpdateTicket,
  ticket,
}) => {
  return (
    <View style={[globalStyles.ticketCard, styles.descriptionWrapper]}>
      {onEdit ? (
        <View
          style={[styles.descriptionWrapper, styles.descriptionInputWrapper]}
        >
          <TextInput
            autoFocus
            value={description}
            onChangeText={(newValue) =>
              setTicketInput((prevState) => ({
                ...prevState,
                description: newValue,
              }))
            }
            onSubmitEditing={onUpdateTicket}
            onBlur={() => {
              setOnEdit({ description: false });
              setTicketInput((prevState) => ({
                ...prevState,
                description: ticket.description,
              }));
            }}
            style={styles.descriptionInput}
          />
          <TouchableOpacity
            onPress={() => {
              setOnEdit({ description: false });
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setOnEdit({ description: true })}
          style={[styles.descriptionWrapper, styles.description]}
        >
          <Text>{description ? description : 'No description'}</Text>
          <FontAwesome name="pencil" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionWrapper: {
    flex: 1 / 4,
    fontSize: 15,
    paddingRight: 10,
  },
  description: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontStyle: 'italic',
    color: '#4C4C4C',
    paddingVertical: 15,
  },
  descriptionInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  descriptionInput: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyles } from '../constants/globalStyles';
import { Ticket } from '../screens/TicketsScreen';

interface Props {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  onEdit: boolean;
  setOnEdit: Dispatch<SetStateAction<boolean>>;
  onUpdateTicket: () => void;
  ticket: Ticket;
}

export const TicketDescription: React.FC<Props> = ({
  description,
  setDescription,
  onEdit,
  setOnEdit,
  onUpdateTicket,
  ticket,
}) => (
  <View style={[globalStyles.ticketCard, styles.descriptionWrapper]}>
    {onEdit ? (
      <View style={[styles.descriptionWrapper, styles.descriptionInputWrapper]}>
        <TextInput
          value={description}
          onChangeText={(newValue) => setDescription(newValue)}
          onSubmitEditing={onUpdateTicket}
          blurOnSubmit
          multiline
          onBlur={() => setOnEdit(false)}
          style={styles.descriptionInput}
        />
        <TouchableOpacity
          onPress={() => {
            setOnEdit(false);
            setDescription(ticket.description);
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    ) : (
      <TouchableOpacity
        onPress={() => setOnEdit(!onEdit)}
        style={[styles.descriptionWrapper, styles.description]}
      >
        <Text>{description || 'No description'}</Text>
        <FontAwesome name="pencil" size={24} color="black" />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  description: {
    color: '#4C4C4C',
    flex: 1,
    flexDirection: 'row',
    fontStyle: 'italic',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  descriptionInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flex: 1,
  },
  descriptionInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  descriptionWrapper: {
    flex: 1 / 4,
    fontSize: 15,
    paddingRight: 10,
  },
});

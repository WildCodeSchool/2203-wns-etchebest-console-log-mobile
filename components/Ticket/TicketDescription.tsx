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
import { Ticket } from '../../src/gql/graphql';
import COLORS from '../../styles/colors';
import { EditMode } from '../../utils/types';

interface Props {
  description: string;
  setTicketInput: Dispatch<SetStateAction<Partial<Ticket>>>;
  onEdit: boolean;
  setOnEdit: Dispatch<SetStateAction<Partial<EditMode>>>;
  onUpdateTicket: () => void;
  ticket: Ticket;
}

const TicketDescription: React.FC<Props> = ({
  description,
  setTicketInput,
  onEdit,
  setOnEdit,
  onUpdateTicket,
  ticket,
}) => (
  <View style={[globalStyles.ticketCard, styles.descriptionWrapper]}>
    {onEdit ? (
      <View style={[styles.descriptionWrapper, styles.descriptionInputWrapper]}>
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
        <Text>{description || 'No description'}</Text>
        <FontAwesome name="pencil" size={24} color="black" />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  description: {
    color: COLORS.darkGray,
    flex: 1,
    flexDirection: 'row',
    fontStyle: 'italic',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  descriptionInput: {
    borderBottomColor: COLORS.lightGray,
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

export default TicketDescription;

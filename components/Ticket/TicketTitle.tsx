import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ticket } from '../../src/gql/graphql';
import COLORS from '../../styles/colors';
import { EditMode } from '../../utils/types';

interface Props {
  title: string;
  setTicketInput: Dispatch<SetStateAction<Partial<Ticket>>>;
  onEdit: boolean;
  setOnEdit: Dispatch<SetStateAction<Partial<EditMode>>>;
  onUpdateTicket: () => void;
}

const TicketTitle: React.FC<Props> = ({
  title,
  setTicketInput,
  onEdit,
  setOnEdit,
  onUpdateTicket,
}) => (
  <View>
    {onEdit ? (
      <View style={styles.titleWrapper}>
        <TextInput
          autoFocus
          value={title}
          onChangeText={(newValue) =>
            setTicketInput((prevState) => ({ ...prevState, title: newValue }))
          }
          style={[styles.title, styles.inputTitle]}
          onSubmitEditing={onUpdateTicket}
          blurOnSubmit
          multiline
          onBlur={() =>
            setOnEdit((prevState) => ({ ...prevState, title: false }))
          }
        />
        <TouchableOpacity
          onPress={() =>
            setOnEdit((prevState) => ({ ...prevState, title: false }))
          }
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    ) : (
      <TouchableOpacity
        onPress={() =>
          setOnEdit((prevState) => ({ ...prevState, title: true }))
        }
        style={styles.titleWrapper}
      >
        <Text style={styles.title}>{title}</Text>
        <FontAwesome name="pencil" size={24} color="black" />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  inputTitle: {
    borderRadius: 4,
    padding: 2,
    paddingLeft: 5,
    width: '90%',
  },
  title: {
    color: COLORS.primary,
    fontSize: 30,
    fontWeight: '600',
    marginRight: 10,
  },
  titleWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default TicketTitle;

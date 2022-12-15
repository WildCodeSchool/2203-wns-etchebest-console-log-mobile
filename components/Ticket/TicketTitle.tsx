import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ticket } from '../../screens/TicketsScreen';
import { EditMode } from './TicketModal';

interface Props {
  title: string;
  setTicketInput: Dispatch<SetStateAction<Partial<Ticket>>>;
  onEdit: boolean;
  setOnEdit: Dispatch<SetStateAction<Partial<EditMode>>>;
  onUpdateTicket: () => void;
}

export const TicketTitle: React.FC<Props> = ({
  title,
  setTicketInput,
  onEdit,
  setOnEdit,
  onUpdateTicket,
}) => {
  return (
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
            onBlur={() => setOnEdit({ title: false })}
          />
          <TouchableOpacity onPress={() => setOnEdit({ title: false })}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() =>
            setOnEdit((prevState) => ({
              title: !prevState.title,
            }))
          }
          style={styles.titleWrapper}
        >
          <Text style={styles.title}>{title}</Text>
          <FontAwesome name="pencil" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: '#146B70',
    fontWeight: '600',
    marginRight: 10,
  },
  inputTitle: {
    padding: 2,
    paddingLeft: 5,
    width: '90%',
    borderRadius: 4,
  },
});

export default TicketTitle;

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  onEdit: boolean;
  setOnEdit: Dispatch<SetStateAction<boolean>>;
  onUpdateTicket: () => void;
}

export const TicketTitle: React.FC<Props> = ({
  title,
  setTitle,
  onEdit,
  setOnEdit,
  onUpdateTicket,
}) => (
  <View>
    {onEdit ? (
      <View style={styles.titleWrapper}>
        <TextInput
          value={title}
          onChangeText={(newValue) => setTitle(newValue)}
          style={[styles.title, styles.inputTitle]}
          onSubmitEditing={onUpdateTicket}
          blurOnSubmit
          multiline
          onBlur={() => setOnEdit(false)}
        />
        <TouchableOpacity onPress={() => setOnEdit(false)}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    ) : (
      <TouchableOpacity
        onPress={() => setOnEdit(!onEdit)}
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
    color: '#146B70',
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

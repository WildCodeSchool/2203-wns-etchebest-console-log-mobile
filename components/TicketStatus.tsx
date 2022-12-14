import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { globalStyles } from '../constants/globalStyles';

interface Props {
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  onEdit: boolean;
  setOnEdit: Dispatch<SetStateAction<boolean>>;
  onUpdateTicket: () => void;
}

export const TicketStatus: React.FC<Props> = ({
  status,
  setStatus,
  onEdit,
  setOnEdit,
  onUpdateTicket,
}) => {
  const [items, setItems] = useState([
    { label: 'To do', value: 'TODO' },
    { label: 'In progress', value: 'DOING' },
    { label: 'Done', value: 'DONE' },
  ]);

  return (
    <View style={[globalStyles.ticketCard, styles.statusWrapper]}>
      <MaterialCommunityIcons
        name="list-status"
        size={24}
        color="black"
        style={styles.iconDetail}
      />
      <View style={styles.selectView}>
        <DropDownPicker
          open={onEdit}
          setOpen={setOnEdit}
          value={status}
          setValue={setStatus}
          items={items}
          multiple={false}
          onChangeValue={onUpdateTicket}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconDetail: {
    marginRight: 10,
  },
  selectView: {
    padding: 3,
    width: '90%',
  },
  statusWrapper: {
    zIndex: 100,
  },
});
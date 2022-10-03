import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "To do", value: "TODO" },
    { label: "In progress", value: "DOING" },
    { label: "Done", value: "DONE" },
  ]);

  return (
    <View style={[styles.wrapper, styles.statusWrapper]}>
      <MaterialCommunityIcons
        name="list-status"
        size={24}
        color="black"
        style={styles.iconDetail}
      />
      <View style={styles.selectView}>
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={value}
          setValue={setValue}
          items={items}
          multiple={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1 / 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "yellow",
    borderColor: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
    paddingLeft: 15,
    marginHorizontal: 5,
    borderRadius: 4,
  },
  statusWrapper: {
    zIndex: 100,
  },
  selectView: {
    padding: 3,
    width: "90%",
  },
  iconDetail: {
    marginRight: 10,
  },
});

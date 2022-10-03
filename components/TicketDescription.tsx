import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ticket } from "../screens/TicketsScreen";

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
}) => {
  return (
    <View style={[styles.wrapper, styles.descriptionWrapper]}>
      {onEdit ? (
        <View
          style={[styles.descriptionWrapper, styles.descriptionInputWrapper]}
        >
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
          <Text>{description ? description : "No description"}</Text>
          <FontAwesome name="pencil" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1 / 10,
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: "white",
  },
  descriptionWrapper: {
    flex: 1 / 4,
    fontSize: 15,
    paddingRight: 10,
  },
  description: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    fontStyle: "italic",
    color: "#4C4C4C",
    paddingVertical: 15,
  },
  descriptionInputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  descriptionInput: {
    flex: 1,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});

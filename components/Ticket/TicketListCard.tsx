import { useMutation } from "@apollo/client";
import { AntDesign } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItem,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { globalStyles } from "../../constants/globalStyles";
import {
  CREATE_ONE_TICKET,
  GET_ALL_TICKETS,
  UPDATE_ONE_TICKET,
} from "../../lib/queries/ticketRequests";
import { Ticket } from "../../screens/TicketsScreen";
import { ticketStatusLabel } from "../../utils/functions";
import TicketCard from "./TicketCard";

interface Props {
  type: "TODO" | "DOING" | "DONE";
  tickets: Ticket[];
}

const TicketListCard: React.FC<Props> = ({ tickets, type }) => {
  const title = ticketStatusLabel[type];
  const [isAddingTicket, setIsAddingTicket] = useState(false);
  const [ticket, setTicket] = useState({
    title: "",
    status: type,
  });

  console.log("tickets", tickets);

  const [createOneticket, { data, error }] = useMutation(CREATE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
  });

  const [updateOneTicket, { error: updateError }] = useMutation(
    UPDATE_ONE_TICKET,
    {
      refetchQueries: () => [{ query: GET_ALL_TICKETS }],
    }
  );

  const onSubmitEditing = () => {
    createOneticket({
      variables: {
        data: {
          title: ticket.title,
          status: ticket.status,
        },
      },
    });
    setTicket({ title: "", status: type });
    setIsAddingTicket(false);
  };

  const onUpdateTicket = (id: string, status: string) => {
    updateOneTicket({
      variables: {
        where: {
          id: id,
        },
        data: {
          status: { set: status },
        },
      },
    });
  };

  const onBlur = () => {
    Keyboard.dismiss();
    setIsAddingTicket(false);
    setTicket((current) => ({ ...current, title: "" }));
  };

  const renderTicket: ListRenderItem<Ticket> = ({ item }) => (
    <TicketCard ticket={item} onUpdateTicket={onUpdateTicket} />
  );
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={[
            styles.container,
            globalStyles.ticketListShadow,
            type === "TODO" ? styles.firstContainer : undefined,
          ]}
        >
          <Text style={styles.cardTitle}>{title}</Text>
          <FlatList
            data={tickets}
            renderItem={renderTicket}
            keyExtractor={(item) => item.id.toString()}
            // onTouchStart={() => setEnableScroll(false)}
            // onTouchEnd={() => setEnableScroll(true)}
            style={{
              backgroundColor: "pink",
              height: 300,
              borderColor: "red",
              borderWidth: 2,
            }}
          />
          {isAddingTicket ? (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={ticket.title}
                onChangeText={(newValue) =>
                  setTicket((current) => ({ ...current, title: newValue }))
                }
                placeholder="Ticket name"
                onSubmitEditing={onSubmitEditing}
                onBlur={onBlur}
              />
              <TouchableOpacity
                onPress={() => {
                  setTicket((current) => ({ ...current, title: "" }));
                  setIsAddingTicket(false);
                }}
              >
                <AntDesign
                  name="close"
                  size={24}
                  color="black"
                  style={styles.closeInputButton}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setIsAddingTicket(true)}>
              <Text style={styles.addButtonText}>+ Add ticket</Text>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f3",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 10,
    marginBottom: 20,
  },
  firstContainer: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "green",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#146B70",
    // color: "#787c7d",
    marginLeft: 3,
    marginBottom: 8,
  },
  addButton: {
    color: "green",
    fontWeight: "800",
  },
  addButtonText: {
    color: "green",
    fontWeight: "800",
    marginLeft: 8,
    letterSpacing: 1,
    fontSize: 15,
  },
  closeInputButton: {
    marginLeft: 5,
  },
});

export default TicketListCard;

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useMutation } from '@apollo/client';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import { CREATE_ONE_PROJECT, GET_ALL_PROJECTS } from '../lib/queries/projects';
import { CREATE_ONE_TICKET, GET_ALL_TICKETS } from '../lib/queries/tickets';
import COLORS from '../styles/colors';
import { TicketStatus } from '../src/gql/graphql';

export enum Entity {
  Project = 'PROJECT',
  Ticket = 'TICKET',
}

interface Props {
  entity: Entity;
  status?: TicketStatus;
}

const placeholderValue = (entity: Entity) => {
  if (entity === Entity.Project) return `Enter a name for your new project`;
  if (entity === Entity.Ticket) return `Enter a title for your new ticket`;
  return 'enter a new name';
};

const QuickAddInput: React.FC<Props> = ({ entity, status }) => {
  const [createProject] = useMutation(CREATE_ONE_PROJECT, {
    refetchQueries: [GET_ALL_PROJECTS],
  });
  const [createTicket] = useMutation(CREATE_ONE_TICKET, {
    refetchQueries: [GET_ALL_TICKETS],
  });

  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState('');

  const onPressAdd = () => {
    setIsFocused(true);
    setName('');
  };

  const onSubmitEditing = () => {
    if (entity === Entity.Project)
      createProject({
        variables: {
          data: { name },
        },
      });
    if (entity === Entity.Ticket)
      createTicket({
        variables: {
          data: { title: name, status },
        },
      });

    setIsFocused(false);
  };
  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      {isFocused ? (
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            style={styles.input}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            placeholder={placeholderValue(entity)}
            placeholderTextColor={COLORS.pastelGreen}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
          />
          <TouchableOpacity
            onPress={() => {
              setName('');
              setIsFocused(false);
            }}
          >
            <AntDesign name="close" size={24} style={styles.closeButton} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.addContainer} onPress={onPressAdd}>
          <Text style={styles.addText}>+ New {entity}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  addText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
  },
  closeButton: {
    color: COLORS.pastelGreen,
    padding: 5,
  },
  container: {
    height: 40,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: COLORS.pastelGreen,
    color: COLORS.white,
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    height: 40,
    letterSpacing: 1,
    paddingLeft: 10,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default QuickAddInput;

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
import COLORS from '../styles/colors';

const AddProject: React.FC = () => {
  const [createProject] = useMutation(CREATE_ONE_PROJECT, {
    refetchQueries: [GET_ALL_PROJECTS],
  });

  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projectName, setProjectName] = useState('');

  const onPressAddProject = () => {
    setIsAddingProject(true);
    setProjectName('');
  };

  const onSubmitEditing = () => {
    createProject({
      variables: {
        data: { name: projectName },
      },
    });
    setIsAddingProject(false);
  };
  const onBlur = () => {
    setIsAddingProject(false);
  };

  return (
    <View style={styles.container}>
      {isAddingProject ? (
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            style={styles.input}
            value={projectName}
            onChangeText={(newValue) => setProjectName(newValue)}
            placeholder="Enter a name for your new project"
            placeholderTextColor={COLORS.pastelGreen}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
          />
          <TouchableOpacity
            onPress={() => {
              setProjectName('');
              setIsAddingProject(false);
            }}
          >
            <AntDesign name="close" size={24} style={styles.closeButton} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addContainer}
          onPress={onPressAddProject}
        >
          <Text style={styles.addButtonText}>+ New Project</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
  },
  addContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
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

export default AddProject;

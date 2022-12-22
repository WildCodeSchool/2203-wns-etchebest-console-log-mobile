import React, { useState } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useQuery, useMutation } from '@apollo/client';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import ProjectCard from '../components/ProjectCard';
import { CREATE_ONE_PROJECT, GET_ALL_PROJECTS } from '../lib/queries/projects';
import COLORS from '../styles/colors';

const ProjectsScreen: React.FC = () => {
  const { data: projectsData } = useQuery(GET_ALL_PROJECTS);
  const [createProject, { data, error }] = useMutation(CREATE_ONE_PROJECT, {
    refetchQueries: [GET_ALL_PROJECTS],
  });

  const [isAddingProject, setIsAddingProject] = useState(false);
  const [project, setProject] = useState({
    name: '',
  });

  const onPressAddProject = () => {
    setIsAddingProject(true);
  };

  const onSubmitEditing = () => {
    createProject({
      variables: {
        data: { name: project.name },
      },
    });
    setProject({ name: '' });
    setIsAddingProject(false);
  };
  const onBlur = () => {
    setIsAddingProject(false);
    setProject((current) => ({ ...current, name: '' }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View
        style={{
          flex: 0.2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Autocomplete
          style={styles.autoComplete}
          placeholder=" Enter the project name"
          data={filteredProjects}
          defaultValue={JSON.stringify(selectedValue) === '{}' ? '' : ''}
          inputContainerStyle={{ borderRadius: 10 }}
        ></Autocomplete>
      </View> */}
      {isAddingProject ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={project.name}
            onChangeText={(newValue) =>
              setProject((current) => ({ ...current, name: newValue }))
            }
            placeholder="Project Name"
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
          />
          <TouchableOpacity
            onPress={() => {
              setProject((current) => ({ ...current, name: '' }));
              setIsAddingProject(false);
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
        <TouchableOpacity onPress={onPressAddProject}>
          <Text style={styles.addButtonText}>+ Add Project</Text>
        </TouchableOpacity>
      )}
      <FlatList data={projectsData?.projects ?? []} renderItem={ProjectCard} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    marginLeft: 8,
  },
  // autoComplete: {
  //   backgroundColor: COLORS.white,
  //   borderRadius: 10,
  //   borderWidth: 0,
  //   height: 30,
  //   justifyContent: 'center',
  //   position: 'relative',
  //   width: 300,
  // },
  closeInputButton: {
    marginLeft: 5,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: COLORS.green,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderWidth: 1,
    flex: 1,
    height: 40,
    padding: 10,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 8,
  },
});
export default ProjectsScreen;

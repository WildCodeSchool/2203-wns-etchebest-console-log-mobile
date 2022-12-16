import { useMutation, useQuery } from '@apollo/client';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { CREATE_ONE_PROJECT, GET_ALL_PROJECTS } from '../lib/projectRequests';

export interface Project {
  name: string;
}

const ProjectsScreen = () => {
  const [createOneProject, { data, error }] = useMutation(CREATE_ONE_PROJECT, {
    refetchQueries: () => [{ query: GET_ALL_PROJECTS }],
  });
  console.log({ data });

  const [isAddingProject, setIsAddingProject] = useState(false);
  const [project, setProject] = useState({
    name: '',
  });

  const onPressAddProject = () => {
    setIsAddingProject(true);
  };

  const onSubmitEditing = () => {
    createOneProject({
      variables: {
        data: {
          name: project.name,
        },
      },
    });
    setProject({ name: '' });
    setIsAddingProject(false);
  };
  const onBlur = () => {
    setIsAddingProject(false);
    setProject((current) => ({ ...current, name: '' }));
  };

  const Item = ({ item, onPress, backgroundColor, textColor }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.name, textColor]}>{item.name}</Text>
    </TouchableOpacity>
  );

  const [selectedValue, setSelectedValue] = useState({});
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [selectedId, setSelectedId] = useState('');

  if (error) return <Text>Error</Text>;

  console.log({ data });

  const renderItem = ({ item }: any) => {
    //const backgroundColor = item.id === selectedId ? "rgb(20, 107, 112)" : "rgba(115, 198, 206, 0.3)";
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        // backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0.2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Autocomplete
          style={[styles.autoComplete]}
          placeholder=" Enter the project name"
          data={filteredProjects}
          defaultValue={JSON.stringify(selectedValue) === '{}' ? '' : ''}
          inputContainerStyle={{ borderRadius: 10 }}
        ></Autocomplete>
      </View>
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
      <View style={{ flex: 2, backgroundColor: 'white', paddingTop: 70 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 107, 112)',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 13,
  },
  name: {
    fontSize: 10,
  },
  autoComplete: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    height: 30,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: 'green',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '800',
    marginLeft: 8,
    letterSpacing: 1,
    fontSize: 15,
  },
  closeInputButton: {
    marginLeft: 5,
  },
});
export default ProjectsScreen;

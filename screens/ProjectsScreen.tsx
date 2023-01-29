import React, { useContext } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import ProjectCard, { ProjectCardFragment } from '../components/ProjectCard';
import { GET_ALL_PROJECTS } from '../lib/queries/projects';
import { AuthContext } from '../context/AuthContext';
import { ProjectContext } from '../context/ProjectContext';
import COLORS from '../styles/colors';
import { useFragment } from '../src/gql/fragment-masking';
import QuickAddInput, { Entity } from '../components/QuickAddInput';

const ProjectsScreen: React.FC = () => {
  const { projectId, setProjectId } = useContext(ProjectContext);
  const { user } = useContext(AuthContext);
  const { data } = useQuery(GET_ALL_PROJECTS, {
    variables: {
      where: {
        users: {
          some: {
            userId: {
              equals: user?.id,
            },
          },
        },
      },
    },
    skip: !user,
  });

  return (
    <View style={styles.container}>
      <QuickAddInput entity={Entity.Project} />
      <FlatList
        data={data?.projects ?? []}
        renderItem={({ item }) => {
          const project = useFragment(ProjectCardFragment, item);
          return (
            <TouchableOpacity onPress={() => setProjectId(project.id)}>
              <ProjectCard project={item} activeProjectId={projectId} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 8,
  },
});
export default ProjectsScreen;

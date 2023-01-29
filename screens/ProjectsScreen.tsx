import React, { useContext } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import ProjectCard from '../components/ProjectCard';
import { GET_ALL_PROJECTS } from '../lib/queries/projects';
import { AuthContext } from '../context/AuthContext';
import COLORS from '../styles/colors';
import QuickAddInput, { Entity } from '../components/QuickAddInput';

const ProjectsScreen: React.FC = () => {
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
      <FlatList data={data?.projects ?? []} renderItem={ProjectCard} />
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

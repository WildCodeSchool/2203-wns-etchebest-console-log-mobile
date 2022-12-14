import { FlatList, View, StyleSheet, Text, ListRenderItem } from 'react-native';
import { allProjectsQueryDocument } from '../lib/queries/projects.js';
import { useQuery } from '@apollo/client';
import { Project, ProjectsQuery } from '../src/gql/graphql';
import ProjectCard from '../components/ProjectCard';

const ProjectsScreen: React.FC = () => {
  const { data, error, loading } = useQuery(allProjectsQueryDocument);

  return (
    <View style={styles.container}>
      <FlatList data={data?.projects ?? []} renderItem={ProjectCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#146b70',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#CCCCCC',
  },
});

export default ProjectsScreen;

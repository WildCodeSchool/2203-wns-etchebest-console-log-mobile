import { useQuery } from '@apollo/client';
import { FlatList, View, StyleSheet } from 'react-native';
import { allProjectsQueryDocument } from '../lib/queries/projects.js';
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
    alignItems: 'center',
    backgroundColor: '#146b70',
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#CCCCCC',
  },
});

export default ProjectsScreen;

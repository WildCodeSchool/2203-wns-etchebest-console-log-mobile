import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { allProjectsQueryDocument } from '../lib/queries/projects';
import ProjectCard from '../components/ProjectCard';
import COLORS from '../styles/colors';

const ProjectsScreen: React.FC = () => {
  const { data } = useQuery(allProjectsQueryDocument);

  return (
    <View style={styles.container}>
      <FlatList data={data?.projects ?? []} renderItem={ProjectCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProjectsScreen;

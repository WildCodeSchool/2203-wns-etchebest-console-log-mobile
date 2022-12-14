import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import ProjectCard from '../components/ProjectCard';
import { graphql } from '../src/gql/gql';
import color from '../styles/colors';

const allProjectsQueryDocument = graphql(`
  query Projects($where: ProjectWhereInput) {
    projects(where: $where) {
      ...ProjectItem
    }
  }
`);

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
    backgroundColor: color.primary,
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProjectsScreen;

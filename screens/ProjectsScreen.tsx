import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import ProjectCard from '../components/ProjectCard';
import { graphql } from '../src/gql/gql';
import COLORS from '../styles/colors';

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
      <FlatList data={data?.projects ?? []} renderItem={ProjectCard} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  autoComplete: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 0,
    height: 30,
    justifyContent: 'center',
    position: 'relative',
    width: 300,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
  },
});
export default ProjectsScreen;

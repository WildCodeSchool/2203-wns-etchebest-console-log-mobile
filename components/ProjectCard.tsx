import { PropsWithChildren } from 'react';
import { Text, StyleSheet } from 'react-native';
import { FragmentType, useFragment } from '../src/gql/fragment-masking';
import { ProjectFragment } from '../lib/queries/projects.js';

const ProjectCard = (
  props: PropsWithChildren<{ item: FragmentType<typeof ProjectFragment> }>
) => {
  const projectData = useFragment(ProjectFragment, props.item);
  return <Text style={styles.project}>{projectData.name}</Text>;
};

const styles = StyleSheet.create({
  project: {
    backgroundColor: '#CCCCCC',
  },
});

export default ProjectCard;

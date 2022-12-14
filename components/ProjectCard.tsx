import { Text, StyleSheet } from 'react-native';
import { FragmentType, useFragment } from '../src/gql/fragment-masking';
import { graphql } from '../src/gql/gql';
import { PropsWithChildren } from 'react';
import {
  ProjectFragment,
  allProjectsQueryDocument,
} from '../lib/queries/projects.js';

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

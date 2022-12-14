import { Text, StyleSheet } from 'react-native';
import { FragmentType, useFragment } from '../src/gql/fragment-masking';
import { graphql } from '../src/gql/gql';
import color from '../styles/colors';

export const ProjectFragment = graphql(/* GraphQL */ `
  fragment ProjectItem on Project {
    _count {
      tickets
    }
    createdAt
    id
    limitDate
    name
    progress
  }
`);

type ProjectProps = {
  item: FragmentType<typeof ProjectFragment>;
};

const ProjectCard = (props: ProjectProps) => {
  const projectData = useFragment(ProjectFragment, props.item);
  return <Text style={styles.project}>{projectData.name}</Text>;
};

const styles = StyleSheet.create({
  project: {
    backgroundColor: color.lightGray,
  },
});

export default ProjectCard;

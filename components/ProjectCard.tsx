import { Text, StyleSheet, View } from 'react-native';
import { FragmentType, useFragment } from '../src/gql/fragment-masking';
import { graphql } from '../src/gql/gql';
import COLORS from '../styles/colors';

const ProjectCardFragment = graphql(/* GraphQL */ `
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
  item: FragmentType<typeof ProjectCardFragment>;
};

const ProjectCard = (props: ProjectProps) => {
  const data = useFragment(ProjectCardFragment, props.item);
  return (
    <View style={styles.project}>
      <Text>Name: {data.name}</Text>
      <Text>Created at: {new Date(data.createdAt).toLocaleDateString()}</Text>
      <Text>Target Date: {new Date(data.limitDate).toLocaleDateString()}</Text>
      <Text>{data.progress ? data.progress : 'no progress yet'}</Text>
      <Text>Tickets: {data?._count?.tickets}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  project: {
    backgroundColor: COLORS.lightGray,
  },
});

export default ProjectCard;

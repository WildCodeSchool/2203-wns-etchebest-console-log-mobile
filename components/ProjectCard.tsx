import { Text, StyleSheet, View } from 'react-native';
import { FragmentType, useFragment } from '../src/gql/fragment-masking';
import { graphql } from '../src/gql/gql';
import COLORS from '../styles/colors';
import { handleDate } from '../utils/functions';

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
  const item = useFragment(ProjectCardFragment, props.item);
  return (
    <View style={styles.projectCard}>
      <Text>Name: {item.name}</Text>
      <Text>Creation Date: {handleDate(item.createdAt)}</Text>
      <Text>Target Date: {handleDate(item.limitDate)}</Text>
      <Text>Progress: {item.progress ? item.progress : 'none yet'}</Text>
      <Text>Tickets: {item?._count?.tickets}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 4,
    marginVertical: 4,
    padding: 8,
  },
});

export default ProjectCard;

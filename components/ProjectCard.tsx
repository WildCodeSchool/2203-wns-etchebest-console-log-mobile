import { Text, StyleSheet } from 'react-native';
import { FragmentType, useFragment } from '../src/gql/fragment-masking';
import { ProjectCardFragment } from '../lib/queries/projects';
import COLORS from '../styles/colors';

type ProjectProps = {
  item: FragmentType<typeof ProjectCardFragment>;
};

const ProjectCard = (props: ProjectProps) => {
  const data = useFragment(ProjectCardFragment, props.item);
  return <Text style={styles.project}>{data.name}</Text>;
};

const styles = StyleSheet.create({
  project: {
    backgroundColor: COLORS.lightGray,
  },
});

export default ProjectCard;

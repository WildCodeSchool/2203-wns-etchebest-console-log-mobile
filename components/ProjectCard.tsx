import { Text, StyleSheet, View } from 'react-native';
import { FragmentType, useFragment } from '../src/gql/fragment-masking';
import { graphql } from '../src/gql/gql';
import COLORS from '../styles/colors';
import { handleDate } from '../utils/functions';

export const ProjectCardFragment = graphql(/* GraphQL */ `
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

export type ProjectProps = {
  project: FragmentType<typeof ProjectCardFragment>;
  activeProjectId: string | null;
};

const ProjectCard = (props: ProjectProps) => {
  const project = useFragment(ProjectCardFragment, props.project);
  return (
    <View
      style={[
        styles.projectCard,
        props.activeProjectId === project.id ? styles.active : null,
      ]}
    >
      <Text>Name: {project.name}</Text>
      <Text>Creation Date: {handleDate(project.createdAt)}</Text>
      <Text>Target Date: {handleDate(project.limitDate)}</Text>
      <Text>Progress: {project.progress ? project.progress : 'none yet'}</Text>
      <Text>Tickets: {project?._count?.tickets}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    backgroundColor: COLORS.pastelBlue,
  },
  projectCard: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 4,
    marginVertical: 4,
    padding: 8,
  },
});

export default ProjectCard;

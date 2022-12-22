import { gql } from '@apollo/client';
import { graphql } from '../../src/gql/gql';

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

export const GET_ALL_PROJECTS = graphql(`
  query Projects($where: ProjectWhereInput) {
    projects(where: $where) {
      ...ProjectItem
    }
  }
`);

export const CREATE_ONE_PROJECT = gql`
  mutation CreateOneProject($data: ProjectCreateInput!) {
    createOneProject(data: $data) {
      id
      name
      progress
    }
  }
`;

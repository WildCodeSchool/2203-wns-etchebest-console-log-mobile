import { gql } from '@apollo/client';
import { graphql } from '../../src/gql/gql';

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
    }
  }
`;

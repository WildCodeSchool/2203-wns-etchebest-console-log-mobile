export const GET_ALL_PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      progress
    }
  }
`;

export const CREATE_ONE_PROJECT = gql`
  mutation CreateOneProject($data: ProjectCreateInput!) {
    createOneProject(data: $data) {
      id
      name
      progress
    }
  }
`;

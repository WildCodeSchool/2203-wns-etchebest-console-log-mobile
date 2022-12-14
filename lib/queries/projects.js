// import { gql } from '@apollo/client'; // legacy, now queries are typed thanks to graphql-codegen (generated in mobile/src/gql/gql.ts)
import { graphql } from '../../src/gql/gql';

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

export const allProjectsQueryDocument = graphql(`
  query Projects($where: ProjectWhereInput) {
    projects(where: $where) {
      ...ProjectItem
    }
  }
`);

// export const GET_ALL_PROJECTS_WITH_METADATA = gql`  // this is what we would have written before
//   query Projects($where: ProjectWhereInput) {
//     projects(where: $where) {
//       _count {
//         tickets
//       }
//       createdAt
//       id
//       limitDate
//       name
//       progress
//     }
//   }
// `;

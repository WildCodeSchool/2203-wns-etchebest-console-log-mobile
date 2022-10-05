import { gql } from "@apollo/client";
export const GET_ONE_USER = gql`
  query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      name
      email
    }
  }
`;

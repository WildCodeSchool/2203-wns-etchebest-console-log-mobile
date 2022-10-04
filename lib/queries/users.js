import { gql } from "@apollo/client";

export const GET_ONE_USER = gql`
  query User($where: UserWhereUniqueInput!) {
    user {
      id
      name
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query Users {
    users {
      id
      name
      email
    }
  }
`;

export const GET_ONE_USER = gql`
  query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      name
      email
    }
  }
`;

export const UPDATE_ONE_USER = gql`
mutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateOneUser(data: $data, where: $where) {
      id
      name
      email
    }
  }
`;

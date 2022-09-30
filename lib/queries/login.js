import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation Login($userLoginInput: UserLoginInput!) {
    login(UserLoginInput: $userLoginInput)
  }
`;

export default LOGIN;

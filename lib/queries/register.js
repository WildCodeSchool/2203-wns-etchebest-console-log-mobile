import { gql } from "@apollo/client";

const REGISTER = gql`
  mutation Register($userRegisterInput: UserRegisterInput!) {
    register(UserRegisterInput: $userRegisterInput) {
      name
      email
    }
  }
`;

export default REGISTER;

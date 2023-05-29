import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  mutation SignIn($phoneNumber: String!, $password: String!) {
    signin(phoneNumber: $phoneNumber, password: $password) {
      accessToken {
        token
        expiresAt
      }
      user {
        id
        isOnboarded
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_ALL_TICKETS = gql`
  query Tickets {
    tickets {
      id
      title
      description
      status
    }
  }
`;

export const CREATE_ONE_TICKET = gql`
  mutation CreateOneTicket($data: TicketCreateInput!) {
    createOneTicket(data: $data) {
      id
      title
      description
      status
    }
  }
`;

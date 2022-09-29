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

export const UPDATE_ONE_TICKET = gql`
  mutation UpdateOneTicket(
    $where: TicketWhereUniqueInput!
    $data: TicketUpdateInput!
  ) {
    updateOneTicket(where: $where, data: $data) {
      id
    }
  }
`;

export const DELETE_ONE_TICKET = gql`
  mutation DeleteOneTicket($where: TicketWhereUniqueInput!) {
    deleteOneTicket(where: $where) {
      id
    }
  }
`;

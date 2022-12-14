import { useMutation } from '@apollo/client';
import {
  CREATE_ONE_TICKET,
  DELETE_ONE_TICKET,
  GET_ALL_TICKETS,
  UPDATE_ONE_TICKET,
} from '../lib/queries/tickets';

const useTicketMutations = () => {
  const [createOneTicket] = useMutation(CREATE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
    // eslint-disable-next-line no-console
    onError: (e) => console.log(e),
  });
  const [updateOneTicket] = useMutation(UPDATE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
    // eslint-disable-next-line no-console
    onError: (e) => console.log(e),
  });
  const [deleteOneTicket] = useMutation(DELETE_ONE_TICKET, {
    refetchQueries: () => [{ query: GET_ALL_TICKETS }],
    // eslint-disable-next-line no-console
    onError: (e) => console.log(e),
  });

  return { createOneTicket, updateOneTicket, deleteOneTicket };
};

export default useTicketMutations;

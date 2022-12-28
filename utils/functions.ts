import moment from 'moment';
import COLORS from '../styles/colors';
import { TicketStatus } from '../src/gql/graphql';

const { Todo, Doing, Done } = TicketStatus;
const Delete = 'DELETE';

export const statusLabel = {
  TODO: 'To do',
  DOING: 'In progress',
  DONE: 'Done',
};

const formattedLabels = {
  Todo: { label: statusLabel[Todo], value: Todo },
  Doing: { label: statusLabel[Doing], value: Doing },
  Done: { label: statusLabel[Done], value: Done },
  Delete: { label: 'Delete', value: 'DELETE' },
};

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const formatText = (str: string) =>
  capitalizeFirstLetter(str.toLowerCase());

export const handleDate = (dateISO: string) =>
  moment(dateISO).format('DD/MM/YYYY HH:mm');

export const getTicketStatusOptions = (status: TicketStatus) => {
  switch (status) {
    case Todo:
      return {
        a: formattedLabels.Done,
        b: formattedLabels.Doing,
      };
    case Doing:
      return {
        a: formattedLabels.Todo,
        b: formattedLabels.Done,
      };
    case Done:
      return {
        a: formattedLabels.Doing,
        b: formattedLabels.Delete,
      };
    default:
      return {
        a: formattedLabels.Doing,
        b: formattedLabels.Done,
      };
  }
};

export const getSwipeBgColor = (option: string) => {
  switch (option) {
    case Todo:
      return COLORS.pastelPurple;
    case Doing:
      return COLORS.pastelBlue;
    case Done:
      return COLORS.pastelGreen;
    case Delete:
      return COLORS.pastelRed;
    default:
      return COLORS.pastelPurple;
  }
};

/**
 *
 * @param input : data to send to request
 * @param id : ticket id (udpate and delete)
 * @param setValue : use set syntaxe ({set: value})
 * @returns
 */
export const getRequestVariables = <T extends object>(
  input: T,
  id?: string | number,
  setValue?: boolean
) => {
  const where = id
    ? {
        where: {
          id,
        },
      }
    : undefined;
  const data: Record<string, unknown> = {};
  const keys = Object.keys(input);
  keys.forEach((key) => {
    const value = input[key as keyof T];
    data[key] = setValue ? { set: value } : value;
  });
  return {
    variables: {
      ...where,
      data,
    },
  };
};

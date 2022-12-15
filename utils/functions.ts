import COLORS from '../styles/colors';

export const getTicketStatusOptions = (status: string) => {
  switch (status) {
    case 'TODO':
      return {
        a: { label: 'Done', value: 'DONE' },
        b: { label: 'In progress', value: 'DOING' },
      };
    case 'DOING':
      return {
        a: { label: 'To do', value: 'TODO' },
        b: { label: 'Done', value: 'DONE' },
      };
    case 'DONE':
      return {
        a: { label: 'In progress', value: 'DOING' },
        b: { label: 'Delete', value: 'DELETE' },
      };
    default:
      return {
        a: { label: 'In progress', value: 'DOING' },
        b: { label: 'Done', value: 'DONE' },
      };
  }
};

export const ticketStatusLabel = {
  TODO: 'To do',
  DOING: 'In progress',
  DONE: 'Done',
};

export const getSwipeBgColor = (status: string) => {
  switch (status) {
    case 'TODO':
      return COLORS.pastelPurple;
    case 'DOING':
      return COLORS.pastelBlue;
    case 'DONE':
      return COLORS.pastelGreen;
    case 'DELETE':
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

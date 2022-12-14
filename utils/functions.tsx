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
      return 'rgba(178, 143, 219, 0.5)';
    case 'DOING':
      return 'rgba(130, 180, 250, 0.5)';
    case 'DONE':
      return 'rgba(149, 245, 195, 0.5)';
    case 'DELETE':
      return 'rgba(255, 136, 128, 0.5)';
  }
};

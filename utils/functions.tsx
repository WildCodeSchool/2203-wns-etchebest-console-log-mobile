export const getTicketStatusLabel = (status: string) => {
  switch (status) {
    case "TODO":
      return "To do";
      break;
    case "DOING":
      return "In progress";
      break;
    case "DONE":
      return "Done";
      break;
    default:
      return "To do";
  }
};

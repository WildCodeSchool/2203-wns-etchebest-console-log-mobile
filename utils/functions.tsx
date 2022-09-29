export const getTicketStatus = (status: string) => {
  switch (status) {
    case "TO DO":
      return "TODO";
      break;
    case "IN PROGRESS":
      return "DOING";
      break;
    case "DONE":
      return "DONE";
      break;
    default:
      return "TODO";
  }
};

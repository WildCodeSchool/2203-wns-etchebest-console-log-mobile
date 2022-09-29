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

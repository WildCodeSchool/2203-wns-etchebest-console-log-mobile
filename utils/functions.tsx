export const getTicketStatusOptions = (status: string) => {
  switch (status) {
    case "TODO":
      return {
        a: { label: "In progress", value: "DOING" },
        b: { label: "Done", value: "DONE" },
      };
      break;
    case "DOING":
      return {
        a: { label: "To do", value: "TODO" },
        b: { label: "Done", value: "DONE" },
      };
      break;
    case "DONE":
      return {
        a: { label: "In progress", value: "DOING" },
        b: { label: "To do", value: "TODO" },
      };
      break;
    default:
      return {
        a: { label: "In progress", value: "DOING" },
        b: { label: "Done", value: "DONE" },
      };
  }
};

export const ticketStatusLabel = {
  TODO: "To do",
  DOING: "In progress",
  DONE: "Done",
};

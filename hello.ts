import JiraTicket from "./Ticket_E"

const ticket_1:JiraTicket = new JiraTicket(
    "PROJ-123",
    "Fix critical bug",
    "This is a critical bug that needs immediate attention.",
    "John Doe",
    "Open"
  );
console.log("Hello, World!  "+ticket_1.description);

import JiraTicket from "../Ticket_E"

const ticket_1:JiraTicket = new JiraTicket(
    "PROJ-123",
    "Fix critical bug",
    "This is a critical bug that needs immediate attention.",
    "John Doe",
    {
        ticket_status: 'Open',
       status_desc:"string opened last week"
    },
    {
        filename: "task",
        size: 44,
        mimeType: "pdf"
    }
  );
console.log("Hello, World!  "+ticket_1.attachement);

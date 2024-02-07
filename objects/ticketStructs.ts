

//1st level interfaces 
interface teamMember{
    name:string
    team:string
    role:string 
    member_since:Date
}


interface TicketStatus{
    ticket_status: 'Open'| 'In-Progress'| 'Done'| 'Closed' 
    status_desc:string
}


//2nd level interfaces 

// Define an interface for Jira Ticket Comment
interface JiraComment {
    author: teamMember;
    text: string;
    timestamp: Date;
  }
  

  // Define an interface for Jira Ticket Attachment
  interface JiraAttachment {
    filename: string;
    size: number;
    mimeType: string;
  }

  export { teamMember, TicketStatus, JiraComment, JiraAttachment };
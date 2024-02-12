import * as readline from 'readline';
import { teamMember, TicketStatus, JiraComment, JiraAttachment } from "../objects/ticketStructs"


class JiraTicket {
    private  _ticketKey: string;
    private _summary: string;
    private _description: string;
    private _assignee: string;
    private _status: TicketStatus;
    private _storypoints:number;
    private _attachement:JiraAttachment;
    private ee_in_days:number;
  

    
    
    constructor(
      ticketKey: string,
      summary: string,
      description: string,
      assignee: string,
      status:TicketStatus,
      attachemen:JiraAttachment
    ) {
      this._ticketKey = ticketKey;
      let additional:String;
      additional = "  additional text  was added to the description "
      this._summary = summary;
      this._description = description+additional;
      this._assignee = assignee;
      this._status = status;
      this._attachement = attachemen
    }
  
    // Getter methods
    get ticketKey(): string {
      return this._ticketKey;
    }
  
    get summary(): string {
      return this._summary;
    }
  
    get description(): string {
      return this._description;
    }
  
    get assignee(): string {
      return this._assignee;
    }
  
    get status(): TicketStatus {
      return this._status;
    }

    get attachement(): JiraAttachment {
        return this._attachement;
      }
  
    // Setter methods
    set summary(summary: string) {
      this._summary = summary;
    }
  
    set description(description: string) {
      this._description = description;
    }
  
    set assignee(assignee: string) {
      this._assignee = assignee;
    }
  
    set status(status: TicketStatus) {
      this._status = status;
    }
  }

  export default JiraTicket;

  let tst:TicketStatus = {
    ticket_status:"In-Progress",
    status_desc:"open and ready to be assigned"
};

let ach:JiraAttachment = {
    filename: "screenshot",
    size: 34,
    mimeType: 'jpeg'
}
  
  // Creating an instance of JiraTicket
  function main():void{
    const myJiraTicket = new JiraTicket(
        "PROJ-123",
        "Fix critical bug",
        "This is a critical bug that needs immediate attention.",
        "John Doe",
        tst,
        ach
      );
      
      // Accessing properties using getter methods
      console.log("Ticket Key:", myJiraTicket.ticketKey);
      console.log("Summary:", myJiraTicket.summary);
      console.log("Description:", myJiraTicket.description);
      console.log("Assignee:", myJiraTicket.assignee);
      console.log("Status:", myJiraTicket.status);
      console.log("attechement detaols",myJiraTicket.attachement['filename'])
      
      // Modifying properties using setter methods
      myJiraTicket.summary = "Update documentation";
      myJiraTicket.assignee = "Alice Smith";
      
      console.log("Updated Summary:", myJiraTicket.summary);
      console.log("Updated Assignee:", myJiraTicket.assignee);
      console.log("NOT CLEAR WHY CIDE OUT OF THE CONSTRUCTOR IS RUNNING !!!!")
  }
  
 // main();
  
 
 
 
 
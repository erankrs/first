import * as readline from 'readline';
class JiraTicket {
    private _ticketKey: string;
    private _summary: string;
    private _description: string;
    private _assignee: string;
    private _status: string;
    private _storypoints:number
  

    
    
    constructor(
      ticketKey: string,
      summary: string,
      description: string,
      assignee: string,
      status: string
    ) {
      this._ticketKey = ticketKey;
      this._summary = summary;
      this._description = description;
      this._assignee = assignee;
      this._status = status;
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
  
    get status(): string {
      return this._status;
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
  
    set status(status: string) {
      this._status = status;
    }
  }

  export default JiraTicket;
  
  // Creating an instance of JiraTicket
  function main():void{
    const myJiraTicket = new JiraTicket(
        "PROJ-123",
        "Fix critical bug",
        "This is a critical bug that needs immediate attention.",
        "John Doe",
        "Open"
      );
      
      // Accessing properties using getter methods
      console.log("Ticket Key:", myJiraTicket.ticketKey);
      console.log("Summary:", myJiraTicket.summary);
      console.log("Description:", myJiraTicket.description);
      console.log("Assignee:", myJiraTicket.assignee);
      console.log("Status:", myJiraTicket.status);
      
      // Modifying properties using setter methods
      myJiraTicket.summary = "Update documentation";
      myJiraTicket.assignee = "Alice Smith";
      
      console.log("Updated Summary:", myJiraTicket.summary);
      console.log("Updated Assignee:", myJiraTicket.assignee);
      console.log("NOT CLEAR WHY CIDE OUT OF THE CONSTRUCTOR IS RUNNING !!!!")
  }
  
  main();
  
 
 
 
 

import {teamMember,Seniority} from "./entities/TeamMember";

class Team{
    private team_id:number;
    private members: teamMember[];
    
    
    constructor() {
        this.members = [];

        // Initialize members array with 5 team members
        for (let i = 0; i < 5; i++) {
            // Create a new teamMember instance and add it to the members array
            this.members.push(new teamMember());
        }
        this.members[0] = new teamMember(6, "moll","Mid");
        this.members[1] = new teamMember (65, "mollttt", "Junior")
    }

   
}

function main():void {
    let team:Team = new Team();
    console.log("ddsddssdd "+team);    
}
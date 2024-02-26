
import {teamMember,Seniority} from "./entities/TeamMember";

class Team{
    private team_id:number;
    private _members: teamMember[];

    public get members(): teamMember[] {
        return this._members;
    }
    public set members(value: teamMember[]) {
        this._members = value;
    }
    
    
    constructor() {
        this.members = [];

        // Initialize members array with 5 team members
        for (let i = 0; i < 5; i++) {
            // Create a new teamMember instance and add it to the members array
            this.members.push(new teamMember());
        }
        this.members[0] = new teamMember(6, "moll","Mid");
        this.members[5] = new teamMember (65, "mollttt", "Junior")
    }



}

function main():void {
    console.log("ddsddssdd %%%%%%########");
    let team:Team = new Team();
    console.log("ddsddssdd "+team.members[699]);    
}
main();
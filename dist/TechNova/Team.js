"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TeamMember_1 = require("./entities/TeamMember");
var Team = /** @class */ (function () {
    function Team() {
        this.members = [];
        // Initialize members array with 5 team members
        for (var i = 0; i < 5; i++) {
            // Create a new teamMember instance and add it to the members array
            this.members.push(new TeamMember_1.teamMember());
        }
        this.members[0] = new TeamMember_1.teamMember(6, "moll", "Mid");
        this.members[5] = new TeamMember_1.teamMember(65, "mollttt", "Junior");
    }
    Object.defineProperty(Team.prototype, "members", {
        get: function () {
            return this._members;
        },
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    return Team;
}());
function main() {
    console.log("ddsddssdd %%%%%%########");
    var team = new Team();
    console.log("ddsddssdd " + team.members[699]);
}
main();

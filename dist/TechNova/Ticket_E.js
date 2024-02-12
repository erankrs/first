"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JiraTicket = /** @class */ (function () {
    function JiraTicket(ticketKey, summary, description, assignee, status, attachemen) {
        this._ticketKey = ticketKey;
        var additional;
        additional = "  additional text  was added to the description ";
        this._summary = summary;
        this._description = description + additional;
        this._assignee = assignee;
        this._status = status;
        this._attachement = attachemen;
    }
    Object.defineProperty(JiraTicket.prototype, "ticketKey", {
        // Getter methods
        get: function () {
            return this._ticketKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JiraTicket.prototype, "summary", {
        get: function () {
            return this._summary;
        },
        // Setter methods
        set: function (summary) {
            this._summary = summary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JiraTicket.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JiraTicket.prototype, "assignee", {
        get: function () {
            return this._assignee;
        },
        set: function (assignee) {
            this._assignee = assignee;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JiraTicket.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JiraTicket.prototype, "attachement", {
        get: function () {
            return this._attachement;
        },
        enumerable: false,
        configurable: true
    });
    return JiraTicket;
}());
exports.default = JiraTicket;
var tst = {
    ticket_status: "In-Progress",
    status_desc: "open and ready to be assigned"
};
var ach = {
    filename: "screenshot",
    size: 34,
    mimeType: 'jpeg'
};
// Creating an instance of JiraTicket
function main() {
    var myJiraTicket = new JiraTicket("PROJ-123", "Fix critical bug", "This is a critical bug that needs immediate attention.", "John Doe", tst, ach);
    // Accessing properties using getter methods
    console.log("Ticket Key:", myJiraTicket.ticketKey);
    console.log("Summary:", myJiraTicket.summary);
    console.log("Description:", myJiraTicket.description);
    console.log("Assignee:", myJiraTicket.assignee);
    console.log("Status:", myJiraTicket.status);
    console.log("attechement detaols", myJiraTicket.attachement['filename']);
    // Modifying properties using setter methods
    myJiraTicket.summary = "Update documentation";
    myJiraTicket.assignee = "Alice Smith";
    console.log("Updated Summary:", myJiraTicket.summary);
    console.log("Updated Assignee:", myJiraTicket.assignee);
    console.log("NOT CLEAR WHY CIDE OUT OF THE CONSTRUCTOR IS RUNNING !!!!");
}
// main();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ticket_E_1 = require("./Ticket_E");
var ticket_1 = new Ticket_E_1.default("PROJ-123", "Fix critical bug", "This is a critical bug that needs immediate attention.", "John Doe", "Open", {
    filename: "task",
    size: 44,
    mimeType: "pdf"
});
console.log("Hello, World!  " + ticket_1.attachement);

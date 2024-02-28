"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ticket_E_1 = __importDefault(require("../TechNova/Ticket_E"));
var ticket_1 = new Ticket_E_1.default("PROJ-123", "Fix critical bug", "This is a critical bug that needs immediate attention.", "John Doe", {
    ticket_status: 'Open',
    status_desc: "string opened last week"
}, {
    filename: "task",
    size: 44,
    mimeType: "pdf"
});
console.log("Hello, World!  " + ticket_1.attachement);

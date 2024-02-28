"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var fs = __importStar(require("fs"));
function first() {
    console.log("Please enter a string");
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter a string: ', function (inputString) {
        if (inputString.length >= 3) {
            var firstThreeCharacters = inputString.slice(0, 3);
            console.log("First three characters: ".concat(firstThreeCharacters));
        }
        else {
            console.log('Input string is too short. It must have at least 3 characters. plese try again');
        }
        rl.close();
    });
}
function second() {
    // Create a writable stream for the output file
    var outputFileStream = fs.createWriteStream('output.txt');
    console.log("Please enter a string");
    var rl = readline.createInterface({
        input: process.stdin,
        output: outputFileStream, // Set the output destination to the output file
    });
    rl.question('Enter a string: ', function (inputString) {
        if (inputString.length >= 3) {
            var firstThreeCharacters = inputString.slice(0, 3);
            console.log("First three characters: ".concat(firstThreeCharacters));
        }
        else {
            console.log('Input string is too short. It must have at least 3 characters. plese try again');
        }
        rl.close();
    });
}
second();

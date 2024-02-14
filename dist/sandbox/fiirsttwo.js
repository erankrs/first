"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var fs = require("fs");
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

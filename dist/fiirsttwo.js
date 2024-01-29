"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter a string: ', function (inputString) {
    if (inputString.length >= 2) {
        var firstTwoCharacters = inputString.slice(0, 2);
        console.log("First two characters: ".concat(firstTwoCharacters));
    }
    else {
        console.log('Input string is too short. It must have at least 2 characters. plese try again');
    }
    rl.close();
});

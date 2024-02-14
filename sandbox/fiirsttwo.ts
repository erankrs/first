import * as readline from 'readline';
import * as fs from 'fs';

function first() {
  console.log("Please enter a string")
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question('Enter a string: ', (inputString) => {
    if (inputString.length >= 3) {
      const firstThreeCharacters = inputString.slice(0, 3);
      console.log(`First three characters: ${firstThreeCharacters}`);
    } else {
      console.log('Input string is too short. It must have at least 3 characters. plese try again');
    }
  
    rl.close();
  });
}





function second() {
  // Create a writable stream for the output file
  const outputFileStream = fs.createWriteStream('output.txt');
  
  console.log("Please enter a string")
  const rl = readline.createInterface({
    input: process.stdin,
    output: outputFileStream, // Set the output destination to the output file
  });
  
  rl.question('Enter a string: ', (inputString) => {
    if (inputString.length >= 3) {
      const firstThreeCharacters = inputString.slice(0, 3);
      console.log(`First three characters: ${firstThreeCharacters}`);
    } else {
      console.log('Input string is too short. It must have at least 3 characters. plese try again');
    }
  
    rl.close();
  });
}

second();
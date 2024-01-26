import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a string: ', (inputString) => {
  if (inputString.length >= 2) {
    const firstTwoCharacters = inputString.slice(0, 2);
    console.log(`First two characters: ${firstTwoCharacters}`);
  } else {
    console.log('Input string is too short. It must have at least 2 characters.');
  }

  rl.close();
});

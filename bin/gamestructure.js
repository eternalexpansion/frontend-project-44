#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const gameStruct = (desc, taskFunc) => {
  const userName = greeting();
  console.log(desc);

  let marker = 0;
  for (let i = 1; i <= 3; i += 1) {
    const step = taskFunc(); {
      console.log(`Question: ${step[0]}`);
      const ans = readlineSync.question('Answer: ');

      if (ans === step[1]) {
        console.log('Correct!');
        marker += 1;
      } else {
        console.log(`'${ans}' is wrong answer ;(. Correct answer was '${step[1]}'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    }

    if (marker === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameStruct;

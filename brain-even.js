#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './src/cli.js';

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function bingus() {
  const q = Math.floor(Math.random() * 100);
  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }

  return [q, a];
}

let marker = 0;

for (let i = 1; i <= 3; i += 1) {
  const step = bingus();

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

console.log(bingus());

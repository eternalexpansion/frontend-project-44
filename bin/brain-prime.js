#!/usr/bin/env node
import gameStruct from './gamestructure.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function task() {
  const num = Math.floor(Math.random() * 10);
  let a = 'no';
  for (let i = 2, sq = Math.sqrt(num); i <= sq; i += 1) {
    if (num % i === 0) {
      a = 'yes';
      break;
    }
  }

  return [num, a];
}

gameStruct(desc, task);

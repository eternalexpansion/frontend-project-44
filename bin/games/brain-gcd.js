#!/usr/bin/env node
import gameStruct from '../gamestructure.js';

const desc = 'Find the greatest common divisor of given numbers.';

function task() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = `${a + b}`;

  return [`${num1} ${num2}`, answer];
}

gameStruct(desc, task);

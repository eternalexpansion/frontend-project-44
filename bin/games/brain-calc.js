#!/usr/bin/env node
import gameStruct from '../gamestructure.js';

const desc = 'What is the result of the expression?';

function task() {
  const numOne = Math.floor(Math.random() * 10);
  const numTwo = Math.floor(Math.random() * 10);

  const operator = ['+', '*', '-'];
  const indexOp = operator[Math.round(Math.random() * 2)];

  let answer = '';

  switch (indexOp) {
    case 0:
      answer = `${numOne + numTwo}`;
      break;
    case 1:
      answer = `${numOne * numTwo}`;
      break;
    default:
      answer = `${numOne - numTwo}`;
      break;
  }

  return [`${numOne} ${indexOp} ${numTwo}`, answer];
}

gameStruct(desc, task);

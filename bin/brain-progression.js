#!/usr/bin/env node
import gameStruct from './gamestructure.js';

const desc = 'What number is missing in the progression?';

function task() {
  const arrLen = Math.floor(Math.random() * 5) + 5;
  const progVal = Math.round(Math.random() * 10);
  const num1 = Math.round(Math.random() * 100);
  const prog = [];
  prog.push(num1);
  for (let i = 1; i < arrLen; i += 1) {
    prog.push(prog[i - 1] + progVal);
  }
  const emptyIndex = Math.floor(Math.random() * arrLen) + 1;
  const answer = `${prog[emptyIndex]}`;
  prog[emptyIndex] = '..';
  return [prog.join(' '), answer];
}

gameStruct(desc, task);

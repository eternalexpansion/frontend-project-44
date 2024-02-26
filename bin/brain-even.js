#!/usr/bin/env node

import gameStruct from './gamestructure.js';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

function task() {
  const q = Math.floor(Math.random() * 100);
  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }

  return [q, a];
}

gameStruct(desc, task);

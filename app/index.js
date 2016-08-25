'use strict';

// using rest properties - choosen at random bc it currently raises
// an error in all browsers, but can be transpiled by Babel
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
const app = document.querySelector('#app')
if (x && y && z.a && z.b) {
  document.querySelector('#app').insertAdjacentHTML('afterbegin', '<h1>works.</h1>');
}


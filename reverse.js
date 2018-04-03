'use strict';

function reverseString(str) {
  if (str === '') {
    return '';
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('hello'));

function reverseIt(str) {
  let reversed = '';
  for ( let i = str.length - 1; i >= 0; i-- ) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseIt('hello'));

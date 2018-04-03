'use strict';

function fib(num, result=[1, 1]) {
  if (num === 2) {
    return result;
  }

  result.push(result[result.length - 1] + result[result.length - 2]);
  return fib(num - 1, result);
}

console.log(fib(7));

function fibIt(num) {
  let result = [];
  for ( let i = 0; i <= num; i++ ) {
    if ( i === 0 ) {
      result.push(0);
    } else if ( i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
}

console.log(fibIt(7));
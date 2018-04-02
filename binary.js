'use strict';

function binary(num, result='') {
  if (num === 0) {
    return result;
  }

  result = (num % 2).toString() + result;
  return binary(Math.floor(num / 2), result);
}

console.log(binary(147));
'use strict';

function factorial(num, result=1) {
  if (num < 1) { 
    return result;
  }

  return factorial(num - 1, result * num);
}

console.log(factorial(8));
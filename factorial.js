'use strict';

function factorial(num, result=1) {
  if (num < 1) { 
    return result;
  }

  return factorial(num - 1, result * num);
}

console.log(factorial(8));

function factorialIt(num) {
  let result = 1;
  for (let i = 2; i <= num; i++ ) {
    result *= i;
  }
  return result;
}

console.log(factorialIt(8));
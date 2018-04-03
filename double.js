'use strict';

function doubleArray(arr) {
  if ( !arr.length ) {
    return [];
  }

  return [(arr[0] * 2), ...doubleArray(arr.slice(1))];
}

console.log(doubleArray([1, 2, 3]));

function doubleIt(arr) {
  let result = [];
  for ( let i = 0; i < arr.length; i++ ) {
    result[i] = arr[i] * 2;
  } 
  return result;
}


console.log(doubleIt([1, 2, 3]));
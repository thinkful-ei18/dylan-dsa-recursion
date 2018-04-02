'use strict';

function doubleArray(arr) {
  if ( !arr.length ) {
    return [];
  }

  return [(arr[0] * 2), ...doubleArray(arr.slice(1))];
}

console.log(doubleArray([1, 2, 3]));
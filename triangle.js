'use strict';

function calculateTrianglularNamuber(num, prev=0) {
  if (num === 0) {
    return prev;
  }

  return calculateTrianglularNamuber(num - 1, num + prev);
}

console.log(calculateTrianglularNamuber(10));

function triangleIt(num) {
  let total = 0;
  for ( let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(triangleIt(10));
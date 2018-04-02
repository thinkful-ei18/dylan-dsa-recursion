'use strict';

function calculateTrianglularNamuber(num, prev=0) {
  if (num === 0) {
    return prev;
  }

  return calculateTrianglularNamuber(num - 1, num + prev);
}

console.log(calculateTrianglularNamuber(10));
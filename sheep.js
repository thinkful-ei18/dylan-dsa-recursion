'use strict';

function countSheep(numSheep) {
  if (numSheep === 0) {
    return;
  }

  console.log(`${numSheep} - Another sheep jump over the fence`);
  countSheep(numSheep - 1);
}

countSheep(3);
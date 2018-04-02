'use strict';

function anagram(str, result=[], prefix='') {
  if (str.length === 0) {
    result.push(prefix);
    return result;
  }

  // for loop and call this recursively to check through all possible permutations
  for ( let i = 0; i < str.length; i++ ) {
    anagram((str.slice(0, i) + str.slice(i+1)), result, (prefix + str[i]));
  }

  return result;
}

console.log(anagram('east'));
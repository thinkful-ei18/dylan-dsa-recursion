'use strict';

function stringSplit(str, predicate, word='') {
  if (str === '') {
    return [word];
  }

  if (predicate(str[str.length - 1])) {
    return [...stringSplit(str.slice(0, -1), predicate), word];
  }
  word = str[str.length - 1] + word;
  return stringSplit(str.slice(0, -1), predicate, word);
}

console.log(stringSplit('the dog went away', x => x === ' '));
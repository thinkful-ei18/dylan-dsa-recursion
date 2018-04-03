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

function splitIt(str, predicate) {
  const result = [];
  let loop = true;
  while (loop) {
    let index = str.indexOf(predicate);
    if ( index === -1 ) break;
    result.push(str.slice(0, index));
    str = str.slice(index + predicate.length);
  }
  result.push(str);
  return result;
}

console.log(splitIt('the dog went away', ' '));
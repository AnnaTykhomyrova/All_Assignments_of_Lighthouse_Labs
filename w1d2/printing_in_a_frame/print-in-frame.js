function printInFrame(list) {
  list = list.split(' ');
  // console.log(list);
  var longest = longestStr(list).length;
  // console.log(longest);
  var border = repeat('*', longest + 4);

  console.log(border);
  for (var word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length + 1) + '*');
  }
  console.log(border);
}

function repeat(str, times) { // var result = str; before function?
  var result = str;

  for (var i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var longest = list[0];

  for (var str of list) {
    if (str.length > longest.length) {
      longest = str;
    }

  }

  return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');

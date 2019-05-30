function countLetters (string) {
  string = string.replace(/ /g,'');
  var repeatedLetters = {};


  var repeatedLettersKeys = string.split('');


  for (var i = 0; i < repeatedLettersKeys.length; i++ ) {
    var storedLetter = repeatedLettersKeys[i];


    if (repeatedLetters[storedLetter]) {
      repeatedLetters[storedLetter] += 1;
    } else {
      repeatedLetters[storedLetter] = 1;
    }
  }
  return repeatedLetters;
}

console.log(countLetters("lighthouse in the house"));
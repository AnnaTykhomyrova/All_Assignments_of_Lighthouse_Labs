function countLetters (string) {
   string = string.replace(/ /g,'');
   var repeatedLetters = {};


   var repeatedLettersKeys = string.split('');

   for (var i = 0; i < repeatedLettersKeys.length; i++ ) {
     var storedLetter = repeatedLettersKeys[i];

     if (repeatedLetters[storedLetter] === undefined){
       repeatedLetters[storedLetter] = [i];
     } else {
       repeatedLetters[storedLetter].push(i);
     }
   }
   return repeatedLetters;
  }

  console.log(countLetters("lighthouse in the house"));
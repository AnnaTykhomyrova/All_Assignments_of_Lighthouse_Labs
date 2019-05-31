var words = ["ground", "control", "to", "major", "tom"];

let map = function(array, callback) {
  let returnArray = [];
  array.forEach((element) => {
    let value = callback(element);
    returnArray.push(value);
  });
  console.log(returnArray);
};


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// Expected output
// [6, 7, 2, 5, 3]
//
// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
//
// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
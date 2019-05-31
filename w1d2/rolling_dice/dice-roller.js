var diceCount = parseInt(process.argv[2], 10);

function rollOne() {
  return Math.floor(Math.random() * 6 + 1);
}

function rollMultiple(count) {


  var result = [];
  for (var i = 0; i < count; i++) {

    result.push(rollOne());
  }


  return result;

 }


 console.log('Rolled ' + diceCount + ' dice: ' + rollMultiple(diceCount).join(', '));

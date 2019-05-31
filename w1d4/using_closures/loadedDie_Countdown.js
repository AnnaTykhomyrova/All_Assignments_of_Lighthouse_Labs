// Exercise One - Loaded Die

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let index = 0;

  return function() {
    /* your code here */
    if (index === list.length - 1) {
      index = 0;
      return list[list.length - 1];
    } else {
      index += 1;
      return list[index - 1];
    }
  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

// Exercise Two - Countdown

var countdownGenerator = function (x) {
  let countdownNumber = x;

  return function() {
    if (countdownNumber > 0) {
      console.log('T-minus ' + countdownNumber + '...');
    } else if (countdownNumber === 0) {
      console.log("Blast Off!");
      rocketGone = true;
    } else if (countdownNumber < 0) {
      console.log("Rockets already gone, bub!");
    }
    countdownNumber --;
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
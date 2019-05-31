var module = require('./index');


module.getStoredNumber(-5);  // invokes the function
module.getStoredNumber(8);
module.getStoredNumber(112);
module.getStoredNumber(0);
module.getStoredNumber(12);
module.getStoredNumber(55);

console.log(module.sortedList());

var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
];
var result = myMap(input, (obj) => {
  let pyth = Math.pow(obj.x, 2) + Math.pow(obj.y, 2);
  return Math.sqrt(pyth);
});

function myMap (input, cb) {
  for (var i = 0; i < input.length; i++) {
    input[i];
    cb (input[i]);
  }
}
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
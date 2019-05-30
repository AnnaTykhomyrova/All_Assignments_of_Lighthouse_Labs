var args = process.argv[2];

function obfuscate(args) {

var password = [];

for (var i = 0; i < args.length; i++) {

switch (args[i]) {
  case "a":
    password.push(4);
    break;
  case "e":
    password.push(3);
    break;
  case "o":
    password.push(0);
    break;
  case "l":
    password.push(1);
    break;
  default:
    password.push(args[i]);
}
}

return password.join('');
}


console.log(obfuscate(args));
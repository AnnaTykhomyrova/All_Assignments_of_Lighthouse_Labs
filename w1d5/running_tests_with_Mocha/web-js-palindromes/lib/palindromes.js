function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");
  stringReverse = stringReverse.replace(/\s/g, "");
  return s.replace(/\s/g, "") == stringReverse;
}

module.exports = isPalindrome;

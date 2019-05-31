var list = [];

function compare (a,b) {
  return a - b;
}

module.exports = {
  getStoredNumber: function (number) {
    list.push(number);
},
  sortedList: function () {
    return list.sort(compare);
  }
};

(function () {
  function findWaldo(arr, found) {
  arr.forEach( (element, dex) => {
    if (element.toLowerCase() === "waldo") {
      found(dex);   // execute callback
    }
  });
  }

  findWaldo(["Alice", "Bob","Waldo", "Winston"], function(result) {
  console.log("Found him! using nameless function!" + "at index: " + result);
  });
})();




(function () {
  function findWaldo(arr, found) {
  arr.forEach( (element, dex) => {
    if (element.toLowerCase() === "waldo") {
      found(dex);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him! using forEach!" + "at index: " + index);
}

findWaldo(["Alice", "Bob","Waldo", "Winston"], actionWhenFound);
})();
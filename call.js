// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach((elem, i) => {
    if (elem === "Waldo") {
      found(i); // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found waldo at index", i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
// Understanding closures in JavaScript
function outer(calback) {
  let a = 10;

  function inner() {
    console.log("Inner function executed", a);
  }
  // let a = 10;
  return inner;
}

var innerFunction = outer();

innerFunction();
// outer()();


// Advantages - Data hiding and encapsulation
function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    console.log("Count:", count);
  };
}

var counter = createCounter();
counter();

var counter2 = createCounter();
counter2();
// Understanding closures in JavaScript
function outer() {
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


// Scalability  - Counter
function createScalableCounter() {
  let count = 2;

  return {
    increment: function() {
      count++;
      console.log("Count:", count);
    },
    decrement: function() {
      count--;
      console.log("Count:", count);
    },
    reset: function() {
      count = 0;
      console.log("Count reset to:", count);
    }
  };
}

var scalableCounter = createScalableCounter();
scalableCounter.increment();

// Disadvantages of Closures- Consumes lot of memory, If not handle properly Memory leaks

// Garbage Collection - Closures can prevent garbage collection of variables that are no longer needed,
// leading to memory leaks if not managed properly.

// Garbage collection is the process of automatically freeing up memory by removing objects that are no longer reachable in the program.
// Closures can keep references to variables even after the outer function has finished executing,  
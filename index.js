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


// .map, .filter, .reduce

const users = [
  { firstName: "Alice", lastName: "Macallister", age: 25 }, 
  { firstName: "Bob", lastName: "George", age: 30 },
  { firstName: "Charlie", lastName: "Doe", age: 35 },
  { firstName: "Charles", lastName: "John", age: 35 } ];

  
  //map
  const output = users.map(user => {
    const fullName  = user.firstName + " " + user.lastName;
    return fullName;
  })
  console.log(output); 

  // filter
  const output2 = users.filter(user => user.age > 30).map(user => {
    return user.firstName;
  })
  console.log(output2);

  // reduce
  const output4 = users.reduce((acc, current) => {
    if (current.age > 30) {
      acc.push(current.firstName);
    }
    return acc;
  }, []);
  console.log(output4);

  // {25: 1, 30: 1, 35: 2}
  const output3 = users.reduce((acc, current) => {
    if (acc[current.age]) {
      acc[current.age] = ++acc[current.age];
    } else {
      acc[current.age] = 1;
    }
    return acc;
  }, {});
  console.log(output3);


  // Promises
  const cart = ["item1", "item2", "item3" ];

  // Callback Hell
  createOrder(cart, function(orderId) {
    processPayment(orderId, function(paymentStatus) {
      showOrderSummary(orderId, paymentStatus, function(summary) {
        updateWalletBalance(summary, function(balance) {
          console.log("Final wallet balance:", balance);
        });
      });
    });
  });

  // Promises Chain
  createOrder(cart)
    .then(orderId => processPayment(orderId)) 
    .then(paymentStatus => showOrderSummary(paymentStatus))
    .then(summary => updateWalletBalance(summary));

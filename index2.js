// ES6 features

// let & const variable declaration
// block scoped -> reduce risk of variable hoisting isse
// const -> prevent accidental reassignment

// Arrow function

// provide more concise syntax
// not hoisted, must be defined before used, automaticallly bind this keyword
let sumOfTwoNumbers = (a, b) => a + b;
let sumOfTwoNumbers2 = (a, b) => {return a + b};

console.log(sumOfTwoNumbers2(2, 3));

// multi line strings
let hello = `I am a 
multi
line string`

// template literals
// simplifies string concatenation & enhnace coe readability
let templeLiteral = `hello ${hello}`

// Destructuring Assignment:

// easy to extract values from arrays, properties from objects
// it reduces the need for manual property access, making your code more efficient and readable.
// Destructuring assignment makes it easy to assign array values and object properties to variables.

//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; 
console.log(a, b);

//Object Destructuring
let person = {name: "Peter", age: 28};
let {name, age} = person; // Object destructuring assignment
console.log(name, age);

// Spread and Rest Operators:
// The Spread (...) Operator
// The ... operator spreads an array or iterable into individual elements.

// Default Parameter Values
// ES6 allows function parameters to have default values.
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value");
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value 2");
    }, 10000);
});

async function handlePromise() {
    console.log("Hello1");

    const value = await promise;
    // looks like JS engine was waiting for promise to resolve. but it is not
    // when await handlePromise is move out from callStack(function suspend) and executed back once promise resolved
    console.log("Hello2");
    console.log(value);

    const value2 = await promise2;
    console.log("Hello3");
    console.log(value2);
}

handlePromise();


function getData() {
    promise.then((res) => console.log(res));
    console.log("Hi");
}

// getData();


const API_URL = "https://api.github.com/users/Binurim";

const getUserData = async () => {
  try {
    const user = await fetch(API_URL);
    const userJson = await user.json();
    console.log(userJson, "User");
  } catch (error) {
    console.log(error, "Error");
  }
};

getUserData();

// • Async/await used for handling promises
// • Async always return a promise
// ° Await can only used inside an async function
// ° Can only write await keyword infront of a promise
// ° While awaiting JS Engine does not actually wait rather the function is suspended and call stack is free for other stuffs but it looks like program is waiting at that point
// ° Use try catch for Error handling and can also use  . Catch() method


// Promise: Think of a promise as a guarantee made by someone (like a function) to do something and provide you with the result later.
// It's like ordering food at a restaurant. You get a promise (receipt) saying your order will be ready soon. 
// You can wait for it (.then()) or check on it later (.catch()).

// Async/Await: Async/await is like asking someone (a function) to do something for you, 
// but instead of waiting for them to finish right there, 
// you tell them you'll do something else while they work. 
// It's like asking a friend to pick up your order from the restaurant.
// You can go do other things (like order a drink) while your friend (the async function) waits for the food (awaits the promise).
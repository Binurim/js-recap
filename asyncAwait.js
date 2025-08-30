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

/*
A JavaScript promise is an object that represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value. Promises 
provide a simpler alternative for executing, composing, and managing 
asynchronous operations when compared to callback-based approaches. */


const statusNow = false;

console.log("Task 1");

// promise definition
const promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        if (statusNow) {
            resolve("Task 2");
        } else {
            reject("Failed!");
        }
    }, 2000)

});

// promise execution
promise.then(function (result) {
    console.log(result);
}
).catch(function (error) {
    console.log(error);
}
);

console.log("Task 3");

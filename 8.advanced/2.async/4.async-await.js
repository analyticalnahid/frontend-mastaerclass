

// Async function always return Promise by default


/*          ___________Async____________         */
function myDisplayer(some) {
    console.log(some);
}
async function myFunction() {
    return "Hello";
}
myFunction().then(
    function (value) { myDisplayer(value); }
);


/*          ___________Await____________         */

async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("I love You !!");
    });
    await myPromise;
    console.log(myPromise);
}

myDisplay();

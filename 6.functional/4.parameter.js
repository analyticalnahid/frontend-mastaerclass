

// Default Parameters

function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}

console.log(myFunction(4));


// Default Parameter Values


function myFunction(x, y = 10) {
    return x + y;
}

console.log(myFunction(5));
console.log(myFunction(5, 20));


// Function Rest Parameter

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x)


// Passed by Value and Passed by Reference




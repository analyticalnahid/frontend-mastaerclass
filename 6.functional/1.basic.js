

// A JavaScript function is defined with the function keyword, followed by a name,
// followed by parentheses ().



function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
}

console.log(myFunction(7, 6))


// Functions Can Be Used as Values

let x1 = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
}

console.log(x1)


/* The function above is actually an anonymous function (a function without a name).
 A JavaScript function can also be defined using an expression. */

const x2 = function (a, b) { return a * b };
console.log(x2(19, 29))


// The Function() Constructor

const myFunction = new Function("a", "b", "return a * b");
let x3 = myFunction(4, 3);
console.log(x3)


    // Anonymous self-invoking function
    (function () {
        let x = "Hello!!";  // I will invoke myself
        console.log(x)
    })();


// Argument Length

function myFunction(a, b) {
    return arguments.length;
}

console.log(myFunction(19, 29))

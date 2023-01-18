

/* A callback is a function passed as an argument to another function. Where 
callbacks really shine are in asynchronous functions, where one function has to 
wait for another function (like waiting for a file to load). */


function displayer(some) {
   console.log(some)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(10, 5, displayer);

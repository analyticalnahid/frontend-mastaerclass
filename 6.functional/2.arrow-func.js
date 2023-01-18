
/* Arrow functions were introduced in ES6. Arrow functions allow us to write shorter
function syntax. Arrow function are mainly usefull for callback , with .map .filter 
.reduce etc in array or inside promise
*/


let myFunction = (a, b) => a * b;
myFunction()


var hello = () => {
    return "Hello World!";
} 
console.log(hello)


var hello = val => "Hello " + val; 
console.log(hello("Nahidul"))



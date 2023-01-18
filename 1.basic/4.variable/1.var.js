

/* To run your code in older browsers, you must use var.
   Variables defined with let cannot be Redeclared.
*/

var x = 5;
var y = 5;
var x = 10;
var z = x + y;
console.log(z);
console.log(a);
var a = 100


// Variables declared with the var keyword can NOT have block scope.

{
    var x = 2;
}

console.log(x)


// Redeclaring a variable using the var keyword can impose problems.

var z = 10;

{
var z = 20;
}

console.log(z)


// Variables defined with var are hoisted to the top and can be initialized at any time. 

carName = "Volvo";
var carName;
console.log(carName)


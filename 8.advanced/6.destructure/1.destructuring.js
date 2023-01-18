/*
In JavaScript, destructuring is a feature that allows you to extract values 
from arrays or objects and assign them to variables. It can be used in both 
array and object destructuring. */

// Variable Swapping
var a = 10;
var b = 20;
[b, a] = [a, b]
console.log(a);
console.log(b);


// Array destructuring
const numbers1 = [1, 2, 3];
const [a1, b1, c1] = numbers1;
console.log(a1);
console.log(b1);
console.log(c1);


// Array destructuring escaping element
const numbers2 = [1, 2, 3, 4, 5 ,6];
const [,,,a2, b2, c2] = numbers2;
console.log(a2);
console.log(b2);
console.log(c2);


// Array destructuring escaping element
const numbers3 = [1, 2, [3,4,5], ,6];
const [,,[,a3,b3]] = numbers3;
console.log(a3);
console.log(b3);
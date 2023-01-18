
/*
The spread operator in JavaScript is represented by three dots (...). 
It is used to expand an iterable (e.g. an array or string) into its 
individual elements. */


var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var mergedArray = [...firstArray, ...secondArray];


// Exract copy of array without reference
var fixCopy = [...firstArray];


firstArray.push(10);

console.log(firstArray);
console.log(fixCopy);


// Spread operator can be used to copy objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2);
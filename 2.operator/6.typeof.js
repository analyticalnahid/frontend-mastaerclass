
/* typeof Operator
 In JavaScript, the type operator typeof is used to return a string that represents 
 the type of a variable.
*/

console.log(typeof 'hello');  // string
console.log(typeof 10);  // number
console.log(typeof true);  // boolean
console.log(typeof [1, 2, 3]);  // object
console.log(typeof {name: 'John'});  // object
console.log(typeof function() {});  // function
console.log(typeof null);  // object
console.log(typeof undefined);  // undefined


/* typeof operator returns 'object' for arrays and objects, and 'function' for functions.
 To check if a variable is an array, you can use the Array.isArray() method */

console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({name: 'John'}));  // false

/* instanceof Operator
 In JavaScript, the instanceof operator is used to determine if an object is an 
 instance of a specific class or constructor. 
*/

let a = [1, 2, 3];
console.log(a instanceof Array); // true

let s = "hello";
console.log(s instanceof String); // false

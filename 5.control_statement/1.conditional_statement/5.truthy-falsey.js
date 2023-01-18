
/* In JavaScript, values have a "truthiness" or "falsiness" that determines whether 
 they evaluate to true or false in a boolean context. This concept is important to 
 understand when working with if statements, while loops, and other parts of the 
 language that rely on boolean expressions
*/


/*       __________ Truthy Values __________
In JavaScript, a truthy value is a value that is considered true when encountered 
in a Boolean context. All values are truthy unless Falsy value.
*/
console.log(Boolean(1));   // true
console.log(Boolean("hello"));   // true
console.log(Boolean([1, 2, 3]));  // true
console.log(Boolean({name: "John"})); // true


/*       __________ Falsy Values __________
A falsy (sometimes written falsey) value is a value that is considered false when 
encountered in a Boolean context. Falsy value false, 0, -0, 0n, "",'',``, null, 
undefined, and NaN
*/
console.log(Boolean(0));   // false
console.log(Boolean(NaN));   // false
console.log(Boolean(""));   // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined));  // false
console.log(Boolean(new Set()));  // false



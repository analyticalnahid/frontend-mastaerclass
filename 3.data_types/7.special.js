
/* _______   Null  ________ */
/* In JavaScript, null is a special data type that represents the absence of 
 a value or a null object reference. It is different from undefined, which 
 represents a variable that has been declared but has not been assigned a value. */

let person = { name: 'John', age: 25, job: 'Developer' };
person.job = null;
console.log(person);


/* _______   Undefined  ________ */
/* In JavaScript, undefined is a special data type that represents the absence of 
a value. When a variable is declared but has not been assigned a value, it is 
considered to be undefined. */

let x;
console.log(x); // Output: undefined
console.log(typeof x === 'undefined') // Output: true


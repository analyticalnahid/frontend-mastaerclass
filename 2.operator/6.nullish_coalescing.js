
// The nullish coalescing operator (??) is a new operator in JavaScript that was 
// introduced in ECMAScript 2020. It is used to return the first non-null or 
// non-undefined value from a list of expressions. The operator is similar to the
// logical OR operator (||), but with a few key differences.


let a = 0;
let b = null;
let c = undefined;
console.log(a ?? b ?? c); // outputs null

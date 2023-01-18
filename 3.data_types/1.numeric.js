

let x = 1234;       // Integer
let y = 1234.5678;   // Floating-point number
let z = 0b1111;      // Binary notation
let a = 0o777;       // Octal notation
let b = 0xFFFF;      // Hexadecimal notation

// Exponential Notation
let y2 = 123e5;    // 12300000
let z2 = 123e-5;   // 0.00123 

let inf = 1 / 0;       // Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
let neginf = -1 / 0;   // -Infinity
let nan = 0 / 0;       // NaN is a JavaScript reserved word indicating that a number is not a legal number.



let num1 = parseInt("123");   // 123
let num2 = parseFloat("123.45");   // 123.45


// In JavaScript, a BigInt is a new data type introduced in ECMAScript 2020, that 
// allows you to represent integers greater than Number.


let aB = 100n;
let bB = 50n;
console.log(aB + bB); // 150n
console.log(aB - bB); // 50n
console.log(aB * bB); // 5000n
console.log(aB / bB); // 2n


/*________ Number Method ________*/












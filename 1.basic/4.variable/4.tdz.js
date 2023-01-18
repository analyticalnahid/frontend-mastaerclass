/*
Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the period
of time between when a variable is declared and when it is initialized. During
this period, the variable is in a "dead zone" and cannot be accessed or used. */

console.log(x); // ReferenceError: x is not defined
let x = 5;



// In JavaScript, the Symbol data type is a new feature introduced in ECMAScript 6, 
// which creates unique, non-string identifiers. Symbols are often used as object 
// property keys and to create unique values for enumerations.


// Symbols are unique, meaning that two symbols created with the same parameter 
// will not be equal, even if they have the same description

let sym1 = Symbol("mySymbol");
let sym2 = Symbol("mySymbol");
console.log(sym1 === sym2); // false


// You can also use symbols as property keys in object literals, and use them to 
// access the properties

let sym = Symbol("mySymbol");
let obj = {
  [sym]: "Hello"
};
console.log(obj[sym]); // "Hello"



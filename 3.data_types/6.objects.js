
// In JavaScript, the Object data type is used to represent a wide range of values,
// including objects, arrays, and functions. An object is a collection of properties,
// where each property has a name (or key) and a value.


let person = {
    name: "John",
    age: 30
};
  
let car = new Object();
car.make = "Toyota";
car.model = "Camry";

  
// You can also use Object.create() method to create an object  

let animal = Object.create(null);
animal.species = "dog";
animal.name = "Buddy";


// You can also use the Object.assign() method to merge two or more objects together

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { e: 5, f: 6 };

let newObj = Object.assign({}, obj1, obj2, obj3);
console.log(newObj);  // { a: 1, b:


person["lastName"]; // Output: "Doe"

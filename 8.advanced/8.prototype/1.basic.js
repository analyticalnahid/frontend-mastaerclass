/*
In JavaScript, a prototype is an object that serves as a template for creating 
new objects. Each object in JavaScript has a prototype, and you can use the 
prototype to add new properties and methods to all objects of a certain type. */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype
Person.prototype.greet = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

// Create a new Person object
var john = new Person("John", 30);

// The greet method is now available on the john object
john.greet(); // Outputs: "Hello, my name is John and I am 30 years old."

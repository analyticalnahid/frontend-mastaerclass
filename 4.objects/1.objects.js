
/* You define (and create) a JavaScript object with an object literal. Objects can 
 also have methods.Methods are actions that can be performed on objects.
 All JavaScript values, except primitives, are objects.Primitive values are immutable 
 (they are hardcoded and cannot be changed).
    1.string
    2.number
    3.boolean
    5.null
    6.undefined
    7.symbol
    8.bigint


Creating a JavaScript Object
Create a single object, using an object literal.
*/

const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// Create a single object, with the keyword new.

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// Create an object using Object.create().

let animalPrototype = {
    sayName: function () {
        console.log(this.name);
    },
    setName: function (name) {
        this.name = name;
    }
};
let animal = Object.create(animalPrototype);
animal.setName('Lion');
animal.sayName(); // Lion

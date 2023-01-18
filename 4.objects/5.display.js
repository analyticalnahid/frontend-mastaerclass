

// Displaying a JavaScript object will output [object Object].

const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person1);


// Displaying Object Properties

const person2 = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person2.name + "," + person2.age + "," + person2.city);


// Displaying the Object in a Loop


const person3 = {
    name: "Nahidul Islam",
    age: 19,
    city: "Dhaka"
};

let txt = "";
for (let x in person3) {
    txt += person3[x] + " ";
};

console.log(txt);


// Using Object.values()

const person4 = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person4);
console.log(myArray)


// Using JSON.stringify()

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

let myString = JSON.stringify(person); 
console.log(myString)
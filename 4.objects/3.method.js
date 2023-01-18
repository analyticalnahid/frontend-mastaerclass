

/*
JavaScript methods are actions that can be performed on objects.

Accessing Object Methods
*/
const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person1.fullName());


// Adding a Method to an Object

const person2 = {
    firstName: "Nahidul",
    lastName: "Islam",
    id: 5566,
};

person2.name = function () {
    return this.firstName + " " + this.lastName;
};

console.log(person2.name()); 
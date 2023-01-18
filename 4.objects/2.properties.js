

/* Properties are the values associated with a JavaScript object.

                _________Accessing JavaScript Properties_________
*/


//  1. objectName.property      // person.age

const person1 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person1.firstname + " is " + person1.age + " years old.");


// 2. objectName["property"]   // person["age"]

const person2 = {
    firstname: "Nahidul",
    lastname: "Islam",
    age: 19,
    eyecolor: "red"
};

console.log(person2["firstname"] + " is " + person2["age"] + " years old.");


// 3. objectName[expression]   // x = "age"; person[x]

const person3 = {
    fname: " John",
    lname: " Doe",
    age: 25
};

for (let x in person3) {
    txt += person3[x];
}


/*               _________Adding New Properties_________  */


const person4 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

person4.nationality = "English";
console.log(person4.nationality)


/*               _________Deleting Properties_________  */


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person.age;
console.log(person.age)


/*               _________Nested Objects_________  */

myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

console.log(myObj.cars.car2);
console.log(myObj.cars["car2"]);
console.log(myObj["cars"]["car2"]);

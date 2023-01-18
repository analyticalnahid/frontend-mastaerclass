
/*          __________Apply Function____________        */

const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "Mary Doe":
console.log(person1.fullName.apply(person2));


/*
The call() method takes arguments separately.
The apply() method takes arguments as an array.
*/


/*          __________Call Function____________        */


const person3 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person4 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person3.fullName.call(person4, "Oslo", "Norway"));


/*          __________Bind Function____________        
With the bind() method, an object can borrow a method from another object.
*/

const person5 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person6 = {
    firstName: "Hege",
    lastName: "Nilsen",
}

console.log(person5.fullName.bind(person6));

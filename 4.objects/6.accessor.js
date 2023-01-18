

/* Getters and setters allow you to define Object Accessors (Computed Properties).
JavaScript can secure better data quality when using getters and setters. 

Why Getter and Setter?
    1. It gives simpler syntax
    2. It allows equal syntax for properties and methods
    3. It can secure better data quality
    4. It is useful for doing things behind-the-scenes
*/


/*            _________ Getter __________               */

const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
};

console.log(person1.lang);


/*            _________ Setter __________               */


const person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
        this.language = value;
    }
};

// Set a property using set:
person.lang = "en";

console.log(person.language);

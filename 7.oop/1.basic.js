
/* JavaScript Classes are templates for JavaScript Objects.A JavaScript class is 
not an object.It is a template for JavaScript objects. */

class Car {

    // Property
    name = "Nahidul Islam"
    roll = 4634344

    // Method
    getArea() {
        return "I am a method";
    }


}


let myCar1 = new Car()          // Creating instance of class (object)

console.log(myCar1.name)        // Accessing property of objects(myCar1)
console.log(myCar1.roll)

console.log(myCar1.getArea())   // Accessing methods of objects(myCar1)

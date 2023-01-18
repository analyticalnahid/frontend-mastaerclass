
/*
In JavaScript, a constructor is a special kind of function that is used to 
initialize and create objects. It is defined with the "constructor" keyword, 
and is typically used in conjunction with the "new" operator to create new 
instances of an object. The constructor method is a special method:

 1. It has to have the exact name "constructor"
 2. It is executed automatically when a new object is created
 3. It is used to initialize object properties

If you do not define a constructor method, JavaScript will add an empty constructor 
method. */


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);

console.log(myCar.age())
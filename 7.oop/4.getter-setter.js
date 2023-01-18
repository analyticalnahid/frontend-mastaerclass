

// To add getters and setters in the class, use the get and set keywords.

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    get cnam() {
        return this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }
}

let myCar = new Car("Ford");

console.log(myCar.cnam="Tesla"); 
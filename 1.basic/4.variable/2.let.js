
/*
Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
*/

let person = "John Doe", carName = "Volvo", price = 200;
console.log(person)


// Variables defined with let have Block Scope.
{
    let x = 20;
    console.log(x)
}

console.log(x)


// Redeclaring a variable using the let keyword can solve this problem.


let x = 10;

{
let x = 02;
console.log(x)
}

console.log(x)

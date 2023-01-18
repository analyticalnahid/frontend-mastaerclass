
// Loops can execute a block of code a number of times.

// In JavaScript, a for loop is used to iterate over a sequence of values,
// such as the elements of an array or the characters in a string.

/* for -loops through a block of code a number of times */

/*
for (initialization; condition; increment) {
    // code to be executed
}
 initialization: This statement is executed before the loop starts. It is typically used to initialize a counter variable.
 condition: This is a Boolean expression that is evaluated before each iteration of the loop. If the condition is true, the loop will continue to execute. If the condition is false, the loop will terminate.
 increment: This statement is executed after each iteration of the loop. It is typically used to increment the counter variable.
*/

let numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}


let numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(function(number2) {
  console.log(number2);
});


let numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(number => console.log(number));


// for/in - loops through the properties of an object

const person = {fname:"John", lname:"Doe", age:25};

let text1 = "";
for (let x in person) {
  text1 += person[x];
} 


const numbers4 = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers4) {
  txt += numbers4[x];
}


// for/of - loops through the values of an iterable object 


const cars = ["BMW", "Volvo", "Mini"];

let text2 = "";
for (let x of cars) {
  text2 += x;
}


let language = "JavaScript";

let text3 = "";
for (let x of language) {
text3 += x;
}

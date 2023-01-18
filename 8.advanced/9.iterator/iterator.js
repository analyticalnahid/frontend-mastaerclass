/*
An iterator in JavaScript is an object that defines a next() method, which 
returns an object with two properties: value and done. The value property is 
the next value in the iteration, and the done property is a Boolean that indicates
if the iteration has completed. */

function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

let iterator1 = fibonacci();
console.log(iterator1.next()); // { value: 0, done: false }
console.log(iterator1.next()); // { value: 1, done: false }
console.log(iterator1.next()); // { value: 1, done: false }
console.log(iterator1.next()); // { value: 2, done: false }
console.log(iterator1.next()); // { value: 3, done: false }

let myArray = [1, 2, 3];
let iterator2 = myArray[Symbol.iterator]();
let arrayFromIterator = [...iterator2];
console.log(arrayFromIterator); // [1, 2, 3]

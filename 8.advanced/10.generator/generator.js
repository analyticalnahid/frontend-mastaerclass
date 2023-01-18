/*
A generator in JavaScript is a special type of function that can be paused 
and resumed, and it returns an iterator object when called. A generator function
is defined using the function* keyword, and it can contain one or more yield 
statements. Each time a yield statement is executed, the generator function's 
state is saved, and the value following the yield keyword is returned. When the 
generator function is resumed, execution resumes from the point where it was last 
paused. */

function* generator() {
  let result = yield "1st yield value";
  console.log(result);
  result = yield "2nd yield value";
  console.log(result);
}
let iterator = generator();
console.log(iterator.next()); // { value: '1st yield value', done: false }
console.log(iterator.next("Hello")); // Hello
// { value: '2nd yield value', done: false }

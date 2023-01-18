// Object destructuring
const person1 = {
  name1: "John",
  age1: 30,
  gender: "male",
};
const { name1, age1 } = person1;
console.log(name1);
console.log(age1);

// Destructuring to assign new variable names
const person2 = {
  name: "John",
  age: 30,
  gender: "male",
};
const { name: name2, age: age2 } = person2;
console.log(name2);
console.log(age2);

// Nested Object destructuring
const person3 = {
  name: "John",
  age: 30,
  education: {
    degree: "Diploma",
  },
};
const {
  education: { degree: degree3 },
  age: age3,
} = person3;
console.log(degree3);
console.log(age3);

// Nested Object destructuring with default
const person4 = {
  name: "John",
  age: 30,
  education: {
    degree: "Diploma",
  },
};
const { education: { degree: degree4 } = {}, age: age4 } = person4;
console.log(degree4);
console.log(age4);

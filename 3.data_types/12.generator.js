
// Generators: Generators are special functions that can be used to generate an 
// iterator, which is an object that implements the iterator protocol.


function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
for (let value of generator) {
  console.log(value);
}



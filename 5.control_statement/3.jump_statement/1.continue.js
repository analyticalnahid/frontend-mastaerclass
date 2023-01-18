
// In JavaScript, "jump statements" are used to transfer control flow out of the 
// normal sequence of instructions. There are two types of jump statements in 
// JavaScript 1.break and 2.continue

// continue: The continue statement is used to skip an iteration in a loop

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i); // Prints 1, 3, 5, 7, 9
}

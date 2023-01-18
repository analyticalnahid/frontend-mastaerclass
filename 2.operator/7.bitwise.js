

/* Bitwise AND (&)
 The bitwise AND operator compares each bit of the first operand to the 
 corresponding bit of the second operand. If both bits are 1, the corresponding 
 result bit is set to 1. Otherwise, the corresponding result bit is set to 0 */

console.log(5 & 3); // 1 (binary: 101 & 011 = 001)
console.log(25 & 15); // 9 (binary: 11001 & 01111 = 01001)


/* Bitwise OR (|)
 The bitwise OR operator compares each bit of the first operand to the 
 corresponding bit of the second operand. If either bit is 1, the corresponding 
 result bit is set to 1. Otherwise, the corresponding result bit is set to 0. */

console.log(5 | 3); // 7 (binary: 101 | 011 = 111)
console.log(25 | 15); // 31 (binary: 11001 | 01111 = 11111)


/* Bitwise XOR (^)
 The bitwise XOR operator compares each bit of the first operand to the 
 corresponding bit of the second operand. If the bits are different, the 
 corresponding result bit is set to 1. Otherwise, the corresponding result bit 
 is set to 0. */

console.log(5 ^ 3); // 6 (binary: 101 ^ 011 = 110)
console.log(25 ^ 15); // 22 (binary: 11001 ^ 01111 = 01110)


/* Bitwise NOT (~)
 The bitwise NOT operator inverts the bits of the operand. It changes all 0s to 
 1s and all 1s to 0s. */

console.log(~5); // -6 (binary: ~101 = 010)
console.log(~25); // -26 (binary: ~11001 = 00110)


/* Left Shift (<<)
 The left shift operator shifts the bits of the operand to the left by a 
 specified number of positions. */

console.log(5 << 1); // 10 (binary: 101 << 1 = 1010)
console.log(25 << 2); // 100 (binary: 11001 << 2 = 100100)


/* Right Shift (>>)
 The right shift operator shifts the bits of the operand to the right by a 
 specified number of positions. */

console.log(5 >> 1); // 2 (binary: 101 >> 1 = 10)
console.log(25 >> 2); // 6 (binary: 11001 >> 2 = 110)


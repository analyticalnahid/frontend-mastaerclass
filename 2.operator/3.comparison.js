
/* Equal (==)
 The equal operator tests for loose equality between two values. It performs type 
 coercion, meaning that it converts the operands to the same type before making the 
 comparison
*/

console.log(1 == '1');  // true
console.log(1 == true);  // true
console.log(0 == false);  // true


/* Not Equal (!=)
 The not equal operator tests for loose inequality between two values. It performs 
 type coercion, meaning that it converts the operands to the same type before making 
 the comparison.
*/

console.log(1 != '1');  // false
console.log(1 != true);  // false
console.log(0 != false);  // false


/* Strict Equal (===) [Equal value and Equal type]
 The strict equal operator tests for strict equality between two values. It does not 
 perform type coercion, meaning that the operands must be of the same type and have 
 the same value to be considered equal.
*/

console.log(1 === '1');  // false
console.log(1 === true);  // false
console.log(0 === false);  // false


/* Strict Not Equal (!==) Not equal value or Not equal type]
 The strict not equal operator tests for strict inequality between two values. 
 It does not perform type coercion, meaning that the operands must be of different 
 types or have different values to be considered unequal.
*/

console.log(1 !== '1');  // true
console.log(1 !== true);  // true
console.log(0 !== false);  // true


/* Greater Than (>)
 The greater than operator tests if the value on the left is greater than the value
 on the right. It does not perform type coercion, meaning that the operands must be 
 numbers or strings that can be compared using their ASCII values. 
*/

console.log(1 > 2);  // false
console.log(2 > 1);  // true
console.log('a' > 'b');  // false
console.log('b' > 'a');  // true


/* Greater Than or Equal To (>=)
 The greater than or equal to operator tests if the value on the left is greater than 
 or equal to the value on the right. It does not perform type coercion, meaning that 
 the operands must be numbers or strings that can be compared using their ASCII values.
*/

console.log(1 >= 2);  // false
console.log(2 >= 1);  // true
console.log(2 >= 2);  // true
console.log('a' >= 'b');  // false
console.log('b' >= 'a');  // true
console.log('a' >= 'a');  // true


/* Less Than (<)
 The less than operator tests if the value on the left is less than the value on 
 the right. It does not perform type coercion, meaning that the operands must be 
 numbers or strings that can be compared using their ASCII values.
*/

console.log(1 < 2);  // true
console.log(2 < 1);  // false
console.log('a' < 'b');  // true
console.log('b' < 'a');  // false


/* Less Than or Equal To (<=)
 The less than or equal to operator tests if the value on the left is less than or 
 equal to the value on the right. It does not perform type coercion, meaning that the 
 operands must be numbers or strings that can be compared using their ASCII values
*/
    
console.log(1 <= 2);  // true
console.log(2 <= 1);  // false
console.log(2 <= 2);  // true
console.log('a' <= 'b');  // true
console.log('b' <= 'a');  // false
console.log('a' <= 'a');  // true







/*
Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:
    1. Block scope
    2. Local/Function scope
    3. Global scope
*/


/*    ___________ Block Scope  _______________   */

// ES6 introduced two important new JavaScript keywords: let and const.These two 
// keywords provide Block Scope in JavaScript.

{
    let x = 2;
}
// x can NOT be used here


/*    ___________ Local Scope  _______________   */
// Function (local) variables are deleted when the function is completed.

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

    // code here can NOT use carName 


/*    ___________ Global Scope  _______________   */    
// In a web browser, global variables are deleted when you close the browser window (or tab).

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}
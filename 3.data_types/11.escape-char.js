
/*________ Escape Character ________*/
// In JavaScript, escape characters are used to insert special characters into 
// strings that cannot be entered directly. An escape character is a backslash () 
// followed by the character that you want to insert


// \n - Newline: This character is used to insert a new line in a string.
console.log("This is the first line.\nThis is the second line.");

// \r - Carriage return: This character is used to return the cursor to the beginning of the current line.
console.log("This is the first line.\rThis is the second line.");

// \t - Tab: This character is used to insert a tab space in a string. 
console.log("This is the first line.\tThis is the second line.");

// \" - Double quote: This character is used to insert a double quote inside a string that is delimited by double quotes.
console.log("This is a string that contains a \" character.");

// \' - Single quote: This character is used to insert a single quote inside a string that is delimited by single quotes.
console.log('This is a string that contains a \' character.');

// \\ - Backslash: This character is used to insert a backslash inside a string.
console.log("This is a string that contains a \\ character.");

// \b - Backspace: This character is used to insert a backspace inside a string.
console.log("This is a string that contains a \b character.");

// \f - Form feed: This character is used to insert a form feed inside a string.
console.log("This is a string that contains a \f character.");

// \uXXXX - Unicode: This character is used to insert a Unicode character into a string. where XXXX is the code point.
console.log("\u00A9"); // output ©
console.log("\u{1F600}"); // output 😀

// \xXX - Hexadecimal: This character is used to insert a hexadecimal character into a string. where XX is the code point.
console.log("\x41"); // output A

// \0 - Null: This character is used to insert a null character into a string.
console.log("This is a string that contains a \0 character.");

// \v - Vertical tab: This character is used to insert a vertical tab inside a string.
console.log("This is a string that contains a \v character.");

// \ddd - Octal: This character is used to insert an octal character into a string. where ddd is the code point.
console.log("\101"); // output A









/*
The rest operator in JavaScript is represented by three dots (...), 
and it is used to gather all remaining elements in an array into a new one. */


function sum(a, ...args) {
	console.log(a);
    console.log(args);
}

sum(5, 4, 6, 8, 9, 3)
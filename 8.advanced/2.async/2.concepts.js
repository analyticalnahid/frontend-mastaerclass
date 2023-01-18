

// Functions running in parallel with other functions are called asynchronous.A good 
// example is JavaScript setTimeout()


/*            ________setTimeout()________                */


console.log("Line 1 Code")

setTimeout(function(){
    console.log("Line 2 Code")
}, 0);

console.log("Line 3 Code")


/*            ________setInterval()________                */


console.log("Line 1 Code")

setInterval(function(){
    console.log("Line 2 Code")
}, 1000);

console.log("Line 3 Code")
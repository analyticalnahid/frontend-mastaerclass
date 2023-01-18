

try {
    // Code that might throw an exception
    var y = 11
    var x = y + 1;
 } catch (error) {
    // Code to handle the exception
    console.error(error);
 } finally {
    //Code will always execute
    console.log("I am always with you")
 }
 
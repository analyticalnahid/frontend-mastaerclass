

"use strict";
myFunction();

function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
}



x1 = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
    "use strict";
    y = 3.14;   // This will cause an error
}

"use strict";
let x2 = 3.14;
delete x2;                // This will cause an error 


/*__________ typeof ___________*/

 typeof "John"                 // Returns "string"
 typeof 3.14                   // Returns "number"
 typeof NaN                    // Returns "number"
 typeof false                  // Returns "boolean"
 typeof [1,2,3,4]              // Returns "object"
 typeof {name:'John', age:34}  // Returns "object"
 typeof new Date()             // Returns "object"
 typeof function () {}         // Returns "function"
 typeof myCar                  // Returns "undefined" *
 typeof null                   // Returns "object" 


 /*__________ instanceof ___________*/

 const cars = ["Saab", "Volvo", "BMW"];

(cars instanceof Array);
(cars instanceof Object);
(cars instanceof String);
(cars instanceof Number);
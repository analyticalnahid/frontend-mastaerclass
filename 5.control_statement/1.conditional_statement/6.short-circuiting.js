
/* In JavaScript, "short-circuiting" is a technique that allows you to optimize 
 the evaluation of Boolean expressions by stopping the evaluation as soon as the 
 outcome is known. This technique is often used with the logical operators && (AND) and || (OR). */


 if (x != null && x > 5) {
    // do something
}


let x = null;
let y = x || 'default value';
console.log(y); // default value



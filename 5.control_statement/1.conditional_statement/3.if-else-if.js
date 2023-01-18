
var time = new Date().getHours();

if (time < 10) {
    greeting = "Good morning";
    console.log(greeting);
} else if (time < 20) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
    console.log(greeting);
}
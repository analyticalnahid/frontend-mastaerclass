
// Switch Statement

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        console.log(day);
        break;
    case 1:
        day = "Monday";
        console.log(day);
        break;
    case 2:
        day = "Tuesday";
        console.log(day);
        break;
    case 3:
        day = "Wednesday";
        console.log(day);
        break;
    case 4:
        day = "Thursday";
        console.log(day);
        break;
    case 5:
        day = "Friday";
        console.log(day);
        break;
    case 6:
        day = "Saturday";
        console.log(day);
}


// The default keyword specifies the code to run if there is no case match.

switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        console.log(text);
        break;
    case 0:
        text = "Today is Sunday";
        console.log(text);
        break;
    default:
        text = "Looking forward to the Weekend";
        console.log(text);
}


// Different Code Blocks

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}


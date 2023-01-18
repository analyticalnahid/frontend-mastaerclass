
/*
This Keyword

In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called). */


// In an object method, this refers to the object.

const person1 = {
   firstName: "John",
   lastName: "Doe",
   id: 5566,
   fullName: function () {
       return this.firstName + " " + this.lastName;
   }
};

/* When used alone, this refers to the global object.Because this is running in the 
global scope.In a browser window the global object is [object Window].
In strict mode, when used alone, this also refers to the global object */

let x = this;


/* In a function, the global object is the default binding for this.In a browser 
window the global object is [object Window] */


function myFunction() {
   return this;
}

/* JavaScript strict mode does not allow default binding.So, when used in a 
function, in strict mode, this is undefined. */

"use strict";
function myFunction() {
   return this;
}

// In HTML event handlers, this refers to the HTML element that received the event

<button onclick="this.style.display='none'">
   Click to Remove Me!
</button>


/* Explicit Function Binding
The call() and apply() methods are predefined JavaScript methods. */

const person2 = {
   fullName: function () {
       return this.firstName + " " + this.lastName;
   }
}

const person3 = {
   firstName: "John",
   lastName: "Doe",
}

// Return "John Doe":
person2.fullName.call(person3);


/*Function Borrowing
With the bind() method, an object can borrow a method from another object. */


const person4 = {
   firstName: "John",
   lastName: "Doe",
   fullName: function () {
       return this.firstName + " " + this.lastName;
   }
}

const member = {
   firstName: "Hege",
   lastName: "Nilsen",
}

let fullName = person4.fullName.bind(member);


/* This Precedence
To determine which object this refers to; use the following precedence of order.
1	bind()
2	apply() and call()
3	Object method
4	Global scope */

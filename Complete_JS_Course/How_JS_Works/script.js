////////////////////////////////////////
// Hoisting
/*
calculateAge(1965);

// Functions
// Function declaration
function  calculateAge(year) {
  console.log(2017 - year);
}

// retirement(1965);  <-- Won't work.
// Hoisting with functions only works with function declarations.

// Function expression
var retirement = function(year) {
  console.log(65 - (2017 - year));
}


// Variables

console.log(age); // <-- Won't work. This is undefined because value not declared yet.
var age = 23;

function foo() {
  var age = 65;
  console.log(age);
}
foo(); // age = 65
console.log(age); // age = 23
*/


////////////////////////////////////////
// Scoping

// First scoping example
/*
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    console.log(a + b + c);
  }
}
*/
// output --> Hello!Hi!Hey!
// This works because of the scoping chain giving access to function written inside function
// and access to global variable--bottom to top via execution stack.

// Example showing difference between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'John';
  //
  console.log(a + d);
}
*/
// output --> undefined because the third function doesn't know about/can't access variable c.
// third function is in different scope than the other two functions and can only access variables
// d and a (global variable).


////////////////////////////////////////
// The 'This' Variable

// Regular function call:  default -- this keyword points at the global object (this window
// object in the browser).

// Method call -- the this variable points to the object that is calling the method.

// Note: The this keyword is not assigned a value until a function where it is defined is actually called.

// console.log(this); // gets the window object
/*
calculateAge(1985);

function calculateAge(year) {
  console.log(2017 - year);
  console.log(this); // gets window object (function call)
}
*/
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this); // gets john object
    console.log(2017 - this.yearOfBirth);
    /*
    function innerFunction() {
      console.log(this);  // gets window object
    }
    innerFunction();

  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
}
// method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/


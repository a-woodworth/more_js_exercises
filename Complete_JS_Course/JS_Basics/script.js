////////////////////////////////////////
//Variables - Part 1
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


////////////////////////////////////////
// Variables - Part 2

/*var name = 'John';
var age = 26;

// console.log(name + age);
// console.log(age + age);

var job, isMarried;

// console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' +
  job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' +
  job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' +
  job + '. Is he married? ' + isMarried + '.');
*/


////////////////////////////////////////
// Operators
/*var now = 2017;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2017 - 52
//1965

console.log(birthYear);
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


////////////////////////////////////////
// If/Else Statements

/*var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

// if (isMarried) {
//   console.log('YES!');
// } else {
//   console.log('NO!');
// }

if (isMarried) {
  console.log('YES!');
}

if (23 === "23") {
  console.log('Something to print...');
}
*/


////////////////////////////////////////
// Boolean Logic and Switch

/*var age = 20;

if (age < 20) {
  console.log('John is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log('John is a young man.');
} else {
  console.log('John is a man.');
}

var job = 'teacher';
job = prompt('What does John do?');

switch (job) {
  case 'teacher':
      console.log('John teaches kids.');
      break;
  case 'driver':
      console.log('John drives a cab.');
      break;
  case 'cop':
      console.log('John helps fight crime.');
      break;
  default:
      console.log('John does something else.');
}
*/


////////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of
his height (in centimeters) plus five times his age wins -- what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some
values

2. Calculate their scores

3. Decide who wins and print the winner to the console. Include the score in the
string that you output to the console. Don't forget that there can be a draw (both
players with the same score).

4. EXTRA: Add a third player and decide who wins. Hint: you will need the &&
operator to take the decision. If you can't solve this one, just watch the solution,
it's no problem :)
*/

/*
// My Solution
var heightBob = 182.88; // 6 ft
var ageBob = 25;

var heightJane = 152.4; // 5 ft
var ageJane = 35;

var scoreBob = heightBob + (ageBob * 5);
var scoreJane = heightJane + (ageJane * 5);
// console.log("Bob's score is: " + scoreBob + "."); // 307.88
// console.log("Jane's score is: " + scoreJane + "."); // 327.4

if (scoreBob > scoreJane) {
  console.log('Bob wins the game with a score of ' +
    scoreBob + '.');
} else if (scoreJane > scoreBob) {
  console.log('Jane wins the game with a score of ' +
    scoreJane + '.');
} else {
  console.log('It\'s a tie!');
}

// EXTRA
var heightRick = 213.36; // 7 ft
var ageRick = 20;
var scoreRick = heightRick + (ageRick * 5);
// console.log("Rick's score is: " + scoreRick + "."); // 313.36

if (scoreBob > scoreJane && scoreBob > scoreRick) {
  console.log('Bob wins the game with a score of ' +
    scoreBob + '.');
} else if (scoreJane > scoreBob && scoreJane > scoreRick) {
  console.log('Jane wins the game with a score of ' +
    scoreJane + '.');
} else if (scoreRick > scoreBob && scoreRick > scoreJane) {
  console.log('Rick wins the game with a score of ' +
    scoreRick + '.');
} else {
  console.log('It\'s a tie!');
  console.log('Final scores are: Bob with ' + scoreBob + '. Jane with ' +
    scoreJane + '. Rick with ' + scoreRick + '.');
}
*/


////////////////////////////////////////
// Functions
/*
function calculateAge (yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);


function yearsUntilRetirement (name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name + ' is already retired.')
  }

}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/


////////////////////////////////////////
// Statements and Expressions
/*
// Function Statement Example
function someFun() {
  // code
}

// Function Expression Example -- produces a value
var someFun = function(param) {
  // code
}

// Expressions
3 + 4;
var x = 3;

// Statements -- performs an action but doesn't produce immediate value
if (x === 5) {
  // do something;
}
*/


////////////////////////////////////////
// Arrays

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// names[1] = 'Ben';
// console.log(names);

// var john = ['John', 'Smith', 1990, 'designer', false];
// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();

// console.log(john);

// // alert(john.indexOf('Smith'));

// if (john.indexOf('teacher') === -1) {
//   console.log('John is NOT a teacher.')
// }


////////////////////////////////////////
// Objects

// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false
// };

// console.log(john);
// console.log(john.lastName);
// console.log(john['lastName']);

// var xyz = 'job';
// console.log(john[xyz]);

// john.lastName = 'Miller';
// john['job'] = 'programmer';

// console.log(john);

// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;

// console.log(jane);


////////////////////////////////////////
// Objects and methods

/* v1.0
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  // function expression
  calculateAge: function() {
    return 2017 - this.yearOfBirth;
  }
};
*/

// console.log(john);
// console.log(john.family);
// console.log(john.family[2]);
// console.log(john.calculateAge());

// var age = john.calculateAge();
// john.age = age;
// console.log(john);

//v2.0
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//     // return 2017 - this.yearOfBirth;
//     this.age = 2017 - this.yearOfBirth;
//   }
// };

// john.calculateAge();
// console.log(john);

// var mike = {
//   yearOfBirth: 1950,
//   calculateAge: function() {
//     this.age = 2017 - this.yearOfBirth;
//   }
// };

// mike.calculateAge();
// console.log(mike);


////////////////////////////////////////
// Loops

//for loops
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

// var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
/*
for (var i = 0; i < names.length; i++) {
  console.log('Hi ' + names[i] + '!');
}

// backward count
for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}
*/
//while loop
/*
var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
}

for (var i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}

for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
*/


////////////////////////////////////////
// Coding Challenge 2

/*
1. Create an array with some years where
persons were born
2. Create an empty array (just [])
3. Use a loop to fill the array with the ages
of the persons
4. Use another loop to log into the console
whether each person is of full age (18 or
older), as well as their age
5. Finally, create a function called
printFullAge which receives the vector of
years as an argument, executes the steps 2.,
3., and 4. and returns a vector of true/false
boolean values: true if the person is of full
age (>= 18 years) and false if not (< 18
years)
6. Call the function with two different
vectors and store the results in two
variables: full_1 and full_2

Example input: [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from
an array, like y[i], but also to set values in
an array, like y[i] = ... You can also use the
specific array methods.
*/

// 1.
var birthYear = [1965, 2008, 1992];

// 2.
var ages = [];

// 3.
// my solution
for (i = 0; i < birthYear.length; i++) {
  ages.push(2017 - birthYear[i]);
}

// exercise solution
// for (i = 0; i < birthYear.length; i++) {
//   ages[i] = 2017 - birthYear[i];
// }

// 4.
for (i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and 18 or older.')
  } else {
    console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and younger than 18.');
  }
}

// 5.
function printFullAge(years) {
  var fullAge = [];
  for (i = 0; i < years.length; i++) {
    var age = 2017 - years[i];
    if (age >= 18) {
      fullAge.push(true);
    }
    else {
      fullAge.push(false);
    }
  }
  return fullAge;
}
console.log(printFullAge([1965, 2008, 1992]));

// 6.
var full_1 = printFullAge([1965, 2008, 1992]);
var full_2 = printFullAge([2009, 1977, 2011]);

console.log(full_1);
console.log(full_2);

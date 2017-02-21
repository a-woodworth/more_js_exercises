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












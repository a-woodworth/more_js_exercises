// Function constructor

// var john = {
//  name: 'John',
//  yearOfBirth: 1990,
//  job: 'teacher'
// };

/*
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge =
  function() {
    console.log(2017 - this.yearOfBirth);
};

// Not common but can assign properties, too.
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2017 - yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
  {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
  });
*/

/* Difference between Object.create and function constructor pattern is that Object.create builds
an object that inherits directly from the one that we passed into the first argument.  While the function constructor, the newly created object, inherits from the construtor's prototype property. Biggest benefit of Object.create is that it allows you to implement more complex inheritence structures in an easier way than function constructor since it allows you to directly specify which object should be a prototype.

Most popular type you usually see is function constructor.
*/


// Primitives vs objects








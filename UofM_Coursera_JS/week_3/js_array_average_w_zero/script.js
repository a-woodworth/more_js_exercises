var grades = [];

var sum = 0;

if (grades.length > 0) {
  for (i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  document.write(sum/grades.length);
}
else
  document.write("Empty Array");

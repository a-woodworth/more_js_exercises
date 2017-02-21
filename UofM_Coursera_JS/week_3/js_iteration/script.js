//Finding the Average

var grades = [80, 87, 94, 82, 62, 98, 81, 81, 74, 91];

var sum = 0;
for (i = 0; i < grades.length; i++) {
  sum += grades[i];
}

document.write(sum/grades.length); //83

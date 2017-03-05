// Don't do it this way! Just showing exercise example for how to capture DOM elements again.

function check() {
  var email1 = document.getElementById('email_addr');
  var email2 = document.getElementById('email_repeat');
  if ( email1.value != email2.value) {
     alert("The two emails must match!!");
     return false;
  }
}

// Don't do it this way! Showing exercise example on how revalidation didn't occur.

function check() {
  var email1 = document.getElementById('email_addr');
  var email2 = document.getElementById('email_repeat');
  if ( email1.value != email2.value) {
    alert("The two emails must match!!");
  }
}

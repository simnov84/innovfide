function validate() {
  var fname = document.forms["RegForm"]["fname"];
  var lname = document.forms["RegForm"]["lname"];
  var email = document.forms["RegForm"]["email"];
  var phone = document.forms["RegForm"]["phone"];
 
  if (fname.value === "") {
    window.alert("Please enter your first name.");
    fname.focus();
    return false;
  } else if (fname.value.match(/^[A-Za-z]+$/) === null) {
    window.alert("Please enter your valid first name.");
    fname.focus();
    return false;
  }

  if (lname.value === "") {
    window.alert("Please enter your last name.");
    lname.focus();
    return false;
  } else if (lname.value.match(/^[A-Za-z]+$/) === null) {
    window.alert("Please enter your valid last name.");
    lname.focus();
    return false;
  }

  if (email.value === "") {
    window.alert("Please enter an e-mail address.");
    email.focus();
    return false;
  } else if (email.value.match(/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/) === null) {
    window.alert("Please enter a valid email address");
    email.focus();
    return false;
  }

  if (phone.value === "") {
    window.alert("Please enter your phone number.");
    phone.focus();
    return false;
  } else if (phone.value.match(/^[0-9+]+$/) === null) {
    window.alert("Please enter a valid phone no.");
    phone.focus();
    return false;
  }
  alert("Form submitted successfully!");
}

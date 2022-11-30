
const form = document.getElementById("form");
const mail = document.getElementById("mail");
const username = document.getElementById("name");
const phone = document.getElementById("phone");
const pass = document.getElementById("pass");
const pass_2 = document.getElementById("pass_2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs

  const usernameValue = username.value.trim();
  const emailValue = mail.value.trim();
  const phoneValue = phone.value.trim();
  const passValue = pass.value.trim();
  const pass_2Value = pass_2.value.trim();

  if (usernameValue === "") {
    // show error
    // add error class

    setErrorFor(username, "User cannot be blank");
  } else {
    // add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(mail, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(mail, "Email is not valid");
  } else {
    setSuccessFor(mail);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone cannot be blank");
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phone, "Phone is not valid");
  } else {
    setSuccessFor(phone);
  }

  if (passValue === "") {
    setErrorFor(pass, "Password cannot be blank");
  } else {
    setSuccessFor(pass);
  }

  if (pass_2Value === "") {
    setErrorFor(pass_2, "Password 2 cannot be blank");
  } else if (passValue !== pass_2Value) {
    setErrorFor(pass_2, "Password does not match");
  } else {
    setSuccessFor(pass_2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //   add Error message inside small
  small.innerText = message;

  //   add error class
  formControl.className = "inputs-container error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "inputs-container success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(phoneNumber) {
  return /9[0-9]{8}/.test(phoneNumber);
}

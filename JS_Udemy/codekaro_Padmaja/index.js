function checkEligibility() {
  var ageInput = document.getElementById("age");
  var age = parseInt(ageInput.value);
  var result = document.getElementById("result");
  if (age >= 18) {
    result.textContent = "You are Eligible to Vote";
  }
  else {
    result.textContent = "You are not Eligible to Vote"
  }
}

// Assignment code here
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var nums = "0123456789";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Passwords must contain between 8 and 128 characters.")
    passwordLength = window.prompt("How many characters long would you like your password to be?")
  }

  alert("Your password will be " + passwordLength + " characters long.")

  console.log(passwordLength)
  var withCapitals = confirm("Would you like your password to contain capitalized letters?\n\nEx. ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  var withNumbers = confirm("Would you like your password to contain numbers?\n\nEx. 0123456789")
  var withSpecialChars = confirm("Would you like your password to contain special characters?\n\nEx. !#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
  var criteriaPrompt = "";
  var enteredCriteria = false

  if (withCapitals) {
    if (!withNumbers && withSpecialChars) {
      criteriaPrompt = "Your password contains:\nCapital letters ✅\nSpecial characters ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true
      return criteriaPrompt + "\n\nYour password is:" + password
    }
    else if (withNumbers && !withSpecialChars) {
      criteriaPrompt = "Your password contains:\nCapital letters ✅\nNumbers ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true
      return criteriaPrompt
    } 
    else if (withNumbers && withSpecialChars) {
      criteriaPrompt = "Your password contains:\nCapital letters ✅\nNumbers ✅\nSpecial characters ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true
      return criteriaPrompt
    } 
    else if (!withNumbers && !withSpecialChars) {
      criteriaPrompt = "Your password contains:\nCapital letters ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true
      return criteriaPrompt
    } 
    else {
      return "This is the else statement returning."
    }
  }
  // if no capital letters
  else if (withNumbers) {
    if (!withCapitals && withSpecialChars) {
      criteriaPrompt = "Your password contains:\nNumbers ✅\nSpecial characters ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true
      return criteriaPrompt
    }
    else if (!withCapitals && !withSpecialChars) {
      criteriaPrompt = "Your password contains:\nNumbers ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true
      return criteriaPrompt
    } 
    else {
      return "This is the else statement returning."
    }
  }
  // if no capital letters and no numbers
  else if (withSpecialChars) {
    criteriaPrompt = "Your password contains:\nSpecial characters ✅"
    console.log(criteriaPrompt)
    enteredCriteria = true
    return criteriaPrompt
  }
  // if user did not select at least one criteria
  else {
    return "To make your password more secure, please select at least 1 of the required criteria."
  }

  console.log(password)

}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


   
// Assignment code here

// 1. Prompt the user for the password criteria
//    a) password length must be between 8 and 128 characters
//    b) password can have lowercase, uppercase, numbers, and/or special characters
// 2. Validate the input
// 3. Generate password based on criteria


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
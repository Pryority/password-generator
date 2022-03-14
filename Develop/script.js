
   
// Assignment code here

// 1. Prompt the user for the password criteria
//    a) password length must be between 8 and 128 characters
//    b) password can have lowercase, uppercase, numbers, and/or special characters
// 2. Validate the input
// 3. Generate password based on criteria

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Passwords must contain between 8 and 128 characters. Please try again.");
  }
  else if (passwordLength > 8 && passwordLength < 128) {
    console.log("Password length: ", passwordLength)
    
    var withSpecialChars = confirm("Click OK to include special characters in your password");
    console.log(withSpecialChars)
    var withLower = confirm("Click OK to include lower-case letters in your password");
    console.log(withLower)
    var withUpper = confirm("Click OK to include upper-case letters in your password");
    console.log(withUpper)
    var withNumbers = confirm("Click OK to include numbers in your password");
    console.log(withNumbers)
  }
}


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
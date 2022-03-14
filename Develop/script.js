
   
// Assignment code here

// 1. Prompt the user for the password criteria
//    a) password length must be between 8 and 128 characters
//    b) password can have lowercase, uppercase, numbers, and/or special characters
// 2. Validate the input
// 3. Generate password based on criteria

const alpha = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("How many characters would you like your password to contain?");
var withLowers = confirm("Would you like your password to contain lower-case letters?\n\nEx. abcdefghijklmnopqrstuvwxyz")
var withUppers = confirm("Would you like your password to contain upper-case letters?\n\nEx. ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var withNumbers = confirm("Would you like your password to contain numbers?\n\nEx. 0123456789")
var withSymbols = confirm("Would you like your password to contain symbols?\n\nEx. !@#$%^&*_-+=")


function generatePassword () {
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    if(withLowers) {
      password += alpha.charAt(Math.floor(Math.random() * passwordLength));
    }
  
    if(withUppers) {
      password += alphaUpper.charAt(Math.floor(Math.random() * passwordLength));
    }
  
    if(withNumbers) {
      password += numbers.charAt(Math.floor(Math.random() * passwordLength));
    }
  
    if(withSymbols) {
      password += symbols.charAt(Math.floor(Math.random() * passwordLength));
    }
  }

  return password
  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
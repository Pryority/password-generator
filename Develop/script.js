
   
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
var withUpper = confirm("Would you like your password to contain upper-case letters?\n\nEx. ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var withNumbers = confirm("Would you like your password to contain numbers?\n\nEx. 0123456789")
var withSymbols = confirm("Would you like your password to contain symbols?\n\nEx. !@#$%^&*_-+=")


function generatePassword (length, characters) {
  let password = "";
  for (let i = 0; i < length; i++) {
    // all criteria
    if (withUpper && withNumbers && withSymbols) {
      let characters = alpha + alphaUpper + numbers + symbols
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      return password;

    }
    // no numbers
    else if (withUpper && !withNumbers && withSymbols) {
      let characters = alpha + alphaUpper + symbols
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      return password;

    }
    // no upper-case
    else if (!withUpper && withNumbers && withSymbols) {
      let characters = alpha + numbers + symbols
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      return password;

    }
    // no upper-case, numbers
    else if (!withUpper && !withNumbers && withSymbols) {
      let characters = alpha + symbols
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      return password;

    }
      // no upper-case, symbols
    else if (!withUpper && withNumbers && !withSymbols) {
      let characters = alpha + numbers
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      return password;

    }
    // no symbols
    else if (withUpper && withNumbers && !withSymbols) {
      let characters = alpha + alphaUpper + numbers
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      return password;

    }
      // no numbers, symbols
    else if (withUpper && !withNumbers && !withSymbols) {
      let characters = alpha + numbers
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      return password;

    }
  
  }
  return password;
  
};

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  // var characters = alpha

  passwordText.value = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
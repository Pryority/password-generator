
   
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


function generatePassword () {
  debugger;
  var password = "";
  var passwordLength = parseInt(prompt("Your password must contain between 8 and 128 instead.\n\nHow many characters would you like your password to contain?"));
  console.log(passwordLength)
  while (passwordLength != Number) {
    alert("That is not an accepted value. Please enter a number between 8 and 128 instead.")
    parseInt(prompt("How many characters would you like your password to contain?"));
    if (passwordLength === Number) {
      break
    }
  }
  if (passwordLength === Number) {
    if (passwordLength >= 8 && passwordLength <= 128) {
      var withLowers = confirm("Would you like your password to contain lower-case letters?\n\nEx. abcdefghijklmnopqrstuvwxyz")
      var withUppers = confirm("Would you like your password to contain upper-case letters?\n\nEx. ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      var withNumbers = confirm("Would you like your password to contain numbers?\n\nEx. 0123456789")
      var withSymbols = confirm("Would you like your password to contain symbols?\n\nEx. !@#$%^&*_-+=")
      for (var i = 0; i < passwordLength; i++) {
        // var withLowers = confirm("Would you like your password to contain lower-case letters?\n\nEx. abcdefghijklmnopqrstuvwxyz")
        if(withLowers) {
          password += alpha.charAt(Math.floor(Math.random() * passwordLength));
        }
        // var withUppers = confirm("Would you like your password to contain upper-case letters?\n\nEx. ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        if(withUppers) {
          password += alphaUpper.charAt(Math.floor(Math.random() * passwordLength));
        }
        // var withNumbers = confirm("Would you like your password to contain numbers?\n\nEx. 0123456789")
        if(withNumbers) {
          password += numbers.charAt(Math.floor(Math.random() * passwordLength));
        } 
        // var withSymbols = confirm("Would you like your password to contain symbols?\n\nEx. !@#$%^&*_-+=")
        if(withSymbols) {
          password += symbols.charAt(Math.floor(Math.random() * passwordLength));
        }
      }
    }
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("That is not an accepted value. Please enter a number between 8 and 128 instead.");
  }
  else {
    return password
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
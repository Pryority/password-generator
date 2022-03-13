// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  var customPass = window.confirm("Our password generator has several customization options. If you would like to add capital letters, numbers or special characters to your password, please press 'OK'. \n\n If you do not want to create a custom password, select 'Cancel' and your basic password will be generated automatically.")
  if (!customPass) {
    console.log("User has chosen a basic password.")
    // generate password with only lower-case alphabetical chars
  }
  else if (customPass) {
    console.log("User has chosen to customize their password.")
  }
  else {
    return
  }
  var withCapitals = window.confirm("Would you like your password to contain capitalized letters?")
  var withNumbers = window.confirm("Would you like your password to contain numbers?")
  var withSpecialChars = window.confirm("Would you like your password to special characters?")
  // window.prompt("Would you like your password to contain numbers? If ")
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
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

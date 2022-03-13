// Assignment code here
var specialChars = "!@#$%^&*()";
var nums = "0123456789";
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var passwordLength = 12;
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  // PASSWORD PROMPTS ------------------------------------
  var customPass = window.confirm("Our password generator has several customization options. If you would like to add capital letters, numbers or special characters to your password, please press 'OK'.\n\nIf you do not want to create a custom password, select 'Cancel' and your basic password will be generated automatically.")
    
  if (customPass) {
    if (customPass && withCapitals) {
      var withCapitals = window.confirm("Would you like your password to contain capitalized letters?")
      console.log("User has chosen to customize their password with CAPITAL LETTERS.")
    }
    else if (customPass && withCapitals && withNumbers) {
      var withNumbers = window.confirm("Would you like your password to contain numbers?")
      console.log("User has chosen to customize their password with CAPITAL LETTERS and NUMBERS.")
    }
    else if (customPass && withCapitals && withNumbers && withSpecialChars) {
      console.log("User has chosen to customize their password with CAPITAL LETTERS and NUMBERS and SPECIAL CHARACTERS.")
      var withSpecialChars = window.confirm("Would you like your password to special characters?")
    }
  }
  else{
    console.log("User has chosen a basic password.")
    // generate password with only lower-case alphabetical chars
  }
  
  // // loop through alphabetUpper
  // for (var i = 0; i <= passwordLength; i++) {
  //   var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   var randomNumber = Math.floor(Math.random() * chars.length);
  //  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

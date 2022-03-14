// Assignment code here
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var nums = "0123456789";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var passwordLength = Number;
var password = "";
let chars;
let passwordTypeAnswer;
var enteredCriteria = false


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Generate password function
function generatePassword() {
  // passwordTypeAnswer = prompt("To make your password more secure, you will need to choose at least 1 criteria from the following:\n\n1 - Capital letters\n2 - Numbers\n3 - Special characters\n\nEnter the number with the corresponding criteria below and confirm your choice.");
  // alert("Passwords must contain between 8 and 128 characters.\n\nHow many characters long would you like your password to be?")
  while (enteredCriteria = false) {
    var withCapitals = confirm("Would you like your password to contain capitalized letters?\n\nEx. ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    var withNumbers = confirm("Would you like your password to contain numbers?\n\nEx. 0123456789")
    var withSpecialChars = confirm("Would you like your password to contain special characters?\n\nEx. !#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
    var criteriaPrompt = "";

    if (withCapitals) {
      if (!withNumbers && withSpecialChars) {
        criteriaPrompt = "Your password will contain:\nCapital letters ✅\nSpecial characters ✅"
        console.log(criteriaPrompt)
        enteredCriteria = true
        return criteriaPrompt
      }
      else if (withNumbers && !withSpecialChars) {
        criteriaPrompt = "Your password will contain:\nCapital letters ✅\nNumbers ✅"
        console.log(criteriaPrompt)
        enteredCriteria = true
        return criteriaPrompt
      } 
      else if (withNumbers && withSpecialChars) {
        criteriaPrompt = "Your password will contain:\nCapital letters ✅\nNumbers ✅\nSpecial characters ✅"
        console.log(criteriaPrompt)
        enteredCriteria = true
        return criteriaPrompt
      } 
      else if (!withNumbers && !withSpecialChars) {
        criteriaPrompt = "Your password will contain:\nCapital letters ✅"
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
        criteriaPrompt = "Your password will contain:\nNumbers ✅\nSpecial characters ✅"
        console.log(criteriaPrompt)
        enteredCriteria = true
        return criteriaPrompt
      }
      else if (!withCapitals && !withSpecialChars) {
        criteriaPrompt = "Your password will contain:\nNumbers ✅"
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
      criteriaPrompt = "Your password will contain:\nSpecial characters ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true
      return criteriaPrompt
    }
    // if user did not select at least one criteria
    else {
      return "To make your password more secure, please select at least 1 of the required criteria."
    }
  }
  // else if (withNumbers) {
  //   if (!withCapitals && withSpecialChars) {
  //     criteriaPrompt = "Your password will contain:\nNumbers ✅\nSpecial characters ✅"
  //     console.log(criteriaPrompt)
  //     return criteriaPrompt
  //   } 
  //   else {
  //     return "This is the else statement returning."
  //   }
  // }
  // else if (withSpecialChars) {
  //   if (!withCapitals && !withNumbers) {
  //     criteriaPrompt = "Your password will contain:\nSpecial characters ✅"
  //     console.log(criteriaPrompt)
  //     return criteriaPrompt
  //   }
  // }
  // else {
  //   return "This is the else statement returning."
  // }
}
  

  
  
// if (withCapitals && withNumbers) {
//   return "Your password will contain capital letters AND numbers."
// }
// else if (withCapitals && withNumbers && withSpecialChars) {
//   return "Your password will contain capital letters AND numbers AND special characters."
// }
// else if (withCapitals && withSpecialChars) {
//   return "Your password will contain capital letters AND special characters."
// }
// else if (withNumbers && withSpecialChars) {
//   return "Your password will contain numbers AND special characters."
// }
// else {
//   return "This is the else."
// }
  
  // // loop through alphabetUpper
  // for (var i = 0; i <= passwordLength; i++) {
  //   var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   var randomNumber = Math.floor(Math.random() * chars.length);
  //  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// window.prompt("Choose one of the following options to generate your password:\n");

// Choose an option below to decide the kind of characters your password will contain:
// var passType = "";



// switch(passwordType) {
//   case 1:
//     chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     break;
//   case 2:
//     chars = "0123456789";
//     break;
//   case 3:
//     chars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//     break;
//   default:
//     chars = alphabet;
// }

  // var withCapitals = window.confirm("Would you like your password to contain capitalized letters?")
  // if (withCapitals) {
  //   console.log("User has chosen to customize their password with CAPITAL LETTERS.")
  // } else {
  //   console.log("User has chosen a basic password.")    
  // }
  // var withNumbers = window.confirm("Would you like your password to contain numbers?")
  // if (withCapitals && withNumbers) {
  //   console.log("User has chosen to customize their password with CAPITAL LETTERS and NUMBERS.")
  // } else {
  //   console.log(withCapitals)
  // }
  // var withSpecialChars = window.confirm("Would you like your password to special characters?")
  // if (withCapitals && withNumbers && withSpecialChars) {
  //   console.log("User has chosen to customize their password with CAPITAL LETTERS and NUMBERS and SPECIAL CHARACTERS.")
  // } else {
  //   console.log(withNumbers)
  // }
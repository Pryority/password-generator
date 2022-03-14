// Assignment code here
var characters = "";

switch(chars) {
  // w/ capitals
  case 1:
    characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  // w/ numbers
  case 2:
    characters ='abcdefghijklmnopqrstuvwxyz0123456789';
  // w/ special characters
  case 3:
    characters ='abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@^_`{|}~';
  // w/ capitals & numbers
  case 4:
    characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // w/ capitals & special characters
  case 5:
    characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@^_`{|}~';
  // w/ numbers & special characters
  case 6:
    characters ='abcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@^_`{|}~';
  default:
    characters = 'abcdefghijklmnopqrstuvwxyz';
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  let result = ' ';
  const charactersLength = characters.length;
  var withCapitals = confirm("Would you like your password to contain capitalized letters?\n\nEx. ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  var withNumbers = confirm("Would you like your password to contain numbers?\n\nEx. 0123456789")
  var withSpecialChars = confirm("Would you like your password to contain special characters?\n\nEx. !#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
  var criteriaPrompt = "";
  var enteredCriteria = false
  for ( let i = 0; i < length; i++ ) {
    if (withCapitals) {
      if (!withNumbers && withSpecialChars) {
        criteriaPrompt = "Your password contains:\nCapital letters ✅\nSpecial characters ✅"
        console.log(criteriaPrompt)
        enteredCriteria = true
        console.log(chars)
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      else if (withNumbers && !withSpecialChars) {
        criteriaPrompt = "Your password contains:\nCapital letters ✅\nNumbers ✅"
        console.log(criteriaPrompt)
        enteredCriteria = true
        
      } 
      else if (withNumbers && withSpecialChars) {
        criteriaPrompt = "Your password contains:\nCapital letters ✅\nNumbers ✅\nSpecial characters ✅"
        console.log(criteriaPrompt)
        enteredCriteria = true
        
      } 
      else if (!withNumbers && !withSpecialChars) {
        criteriaPrompt = "Your password contains:\nCapital letters ✅"
        console.log(criteriaPrompt)
        enteredCriteria = true
        
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
      
    }
    else if (!withCapitals && !withSpecialChars) {
      criteriaPrompt = "Your password contains:\nNumbers ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true
     
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
    
  }
  // if user did not select at least one criteria
  else {
    return "To make your password more secure, please select at least 1 of the required criteria."
  }
  }

  return result;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
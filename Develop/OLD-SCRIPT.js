// Assignment code here
var characters = "";
let passwordLength;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Generate password function
function generatePassword() {
  var withCapitals = confirm("Would you like your password to contain capitalized letters?\n\nEx. ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  var withNumbers = confirm("Would you like your password to contain numbers?\n\nEx. 0123456789")
  var withSpecialChars = confirm("Would you like your password to contain special characters?\n\nEx. !#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
  var criteriaPrompt = "";
  var enteredCriteria = false


  switch(chars) {
    // w/ capitals
    case 1:
      var gen = function generate(passwordLength) {
        var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
        return result;
      }
    // w/ numbers
    case 2:
      var gen = function generate(passwordLength) {
        var characters ='abcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
        return result;
      }
      
    // w/ special characters
    case 3:
      var gen = function generate(passwordLength) {
        var characters ='abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@^_`{|}~';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
        return result;
      }
      
    // w/ capitals & numbers
    case 4:
      var gen = function generate(passwordLength) {
        var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
        return result;
      }
    // w/ capitals & special characters
    case 5:
      var gen = function generate(passwordLength) {
        var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@^_`{|}~';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
        return result;
      }
      
    // w/ numbers & special characters
    case 6:
      characters ='abcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@^_`{|}~';
    default:
      characters = 'abcdefghijklmnopqrstuvwxyz';
  }

  if (withCapitals) {
    if (!withNumbers && withSpecialChars) {
      criteriaPrompt = "Your password contains:\nCapital letters ✅\nSpecial characters ✅"
      console.log(criteriaPrompt)
      enteredCriteria = true    
    }
    else if (withNumbers && !withSpecialChars) {
      criteriaPrompt = "Your password contains:\nCapital letters ✅\nNumbers ✅"
      console.log(criteriaPrompt) 
      enteredCriteria = true
      console.log(chars)
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
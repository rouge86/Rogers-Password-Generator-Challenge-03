// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


//Adjusted Online tutorial script based on https://dev.to/code_mystery/random-password-generator-using-javascript-6a

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  //Parse takes a string and turns to number
  var passwordLength = parseInt(prompt("Choose character length between 8 - 128"));
    
  // Prompt passwordLength between 8-128 characters
    if(passwordLength < 8 || passwordLength > 128 ){
      alert("Please enter a number between 8 & 128")
      return "";
    }
  
    /* Alternative  multiple passwordLength prompts
    if(passwordLength < 8) {
      alert("Please pick a length more than 8")
      return "";
    } 
    if(passwordLength > 128) {
      alert("Please pick a length less than 128")
      return "";
    }
    */

    //Validation check, prompt to imput a numeric value
    if(Number.isNaN(passwordLength)) {
      alert("Input must be numeric")
      return "";
    }

    var hasSpecialCharacters = confirm("Click OK if you want to include Special Characters");
    var hasLowerCase = confirm("Click OK if you want to include lowerCase Characters");
    var hasUpperCase = confirm("Click OK if you want to include UpperCase Characters");
    var hasNumbers = confirm("Click OK if you want to include Numbers");

    //Validation check, alert for when passwordLength selected but no character type is selected
    if (!hasSpecialCharacters && 
        !hasLowerCase &&
        !hasUpperCase &&
        !hasNumbers  
      ) {
        alert("You must select at least one character type")
        return "";
      }

      var password = "";

      var userCharType = "";
      function getRandom(str){
        var randomNumber = Math.floor(Math.random() * str.length);
        
        // charAt is built in method plucks individual characters from each array. Uncomment 
        var randomChar = str.charAt(randomNumber);
        //See how it works
        /*
        console.log(str);
        console.log(randomNumber);
        */

        return randomChar;

      }

      if (hasSpecialCharacters) {
        userCharType += special;
        password += getRandom(special)

      }

      if (hasLowerCase) {
        userCharType += lower;
        password += getRandom(lower)

      }

      if (hasUpperCase) {
        userCharType += upper;
        password += getRandom(upper)

      }

      if (hasNumbers) {
        userCharType += numeric;
        password += getRandom(numeric)

      }

      var remaining = passwordLength - password.length;


      for (var i = 0; i < remaining; i++){
        password += getRandom(userCharType)
      }      

      return password;
    }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


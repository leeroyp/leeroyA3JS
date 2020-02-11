// DOM elements

const generateEl = document.getElementById('generate')


// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber, 
//     symbol: getRandomSymbol
// };

generateEl.addEventListener('click',writePassword)

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }



// Prompts that come up after you click generate password
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
  
    var numbers = confirm("Do you want numbers in your password?");
  
    var lowerCases = confirm("Do you want lowercases in your password?");
  
    var upperCases = confirm("Do you want uppercases in your password?");
  
    var special = confirm("Do you want special characters in your password?");
  
    // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount = 0;


// Generator functions


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}

function getRandomSymbol() {
    const symboles = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
};


// Checks to make sure user selected ok for all and uses empty minimums from above

if (numbers === true) {
  minimumNumbers = functionArray.getRandomNumber();
  minimumCount++;

}

if (lowerCases === true) {
  minimumLowerCases = functionArray.getRandomLower();
  minimumCount++;

}

if (upperCases === true) {
  minimumUpperCases = functionArray.getRandomUpper();
  minimumCount++;

}

if (special === true) {
  minimumSpecialCharacters = functionArray.getRandomSymbols();
  minimumCount++;

}
// Assignment Code
var generateBtn = document.querySelector(".btn");
 
function criteria(){
  var plength 
  var characters  
  

  plength = prompt("Please select the length of password between 8 and 128");
  // characters = prompt("please select the type characters you would like to use");
  
  while (plength < 8 || plength > 128) {
    plength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }
  characters=prompt("please input all types of characters you would like to use ")

  // while( characters!= lowercase, uppercase, numbers , special characters){

  // }
}
generateBtn.addEventListener('click', criteria);














// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
  var num ='0123456789'
  var sym ="!@#$%^&*()_+~`|}{[]\:;?><,./-="


 
  function password (){
    var pwd ="";
  
    for( i=0; i<lenght; i++){
      pwd+= characters.charAt(Math.floor(Math.random()+characters.length))
    }
  
    return pwd
  }
 
 
 
  // passwordText.value = password;

}





// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



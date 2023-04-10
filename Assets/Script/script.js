// Assignment code here

//All possible characters for a password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nums = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!", "@", "#","$","%","^","&","*",".","?"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function generatePassword() {
  var startingPass = [];
  var passGenerate = [];


  //Verify that a password fits within the range and that it is a number 
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("That is not a number that is between 8 and 128 you silly goose");
  }
  while (isNaN(passwordLength)) {
    passwordLength = prompt("That is not a number. Choose a number between 8 and 128 you silly goose.");

  }
  //Confirm or cancel options for types of characters to be included 
  var inLowerCase = confirm("Do you want lower case letters?");
  var withNums = confirm("Do you want to include numbers?");
  var withSpecialChars = confirm("Do you want to use special characters?");
  var inUpperCase = confirm("Do you want to include upper case letters?");


  //Verifies that at least one type of character is chosen 

  while (!inLowerCase && !withNums && !withSpecialChars && !inUpperCase){
    alert("Choose at least one character type.");
    inLowerCase = confirm("Do you want lower case letters?");
    withNums = confirm("Do you want to include numbers?");
    withSpecialChars = confirm("Do you want to use special characters?");
    inUpperCase = confirm("Do you want to include upper case letters?");

  }
//Adds all the arrays of possible characters if chosen to an empty array variable, startingPass
  
  if (inLowerCase){
    startingPass = startingPass.concat(lowerCase);
  }
  if (withNums){
    startingPass = startingPass.concat(nums);
  }
  if (withSpecialChars){
    startingPass = startingPass.concat(specialChar);
  }
  if (inUpperCase){
    startingPass = startingPass.concat(upperCase);
  }


//Loops through the total length of characters specified by the prompt
// var randomChar created to randomize values, multiplied by the length of the password
// The password that will be generated is set to an empty array that will .push the elements from the created startingPass array, randomized by randomChars
//Returning the value for passGenerate and joining the items in the index with no space "" to be output by the function generatePassword()

  for (i = 0; i < passwordLength; i++){
    var randomChars = Math.floor(Math.random() * i);
    passGenerate.push(startingPass[randomChars]);
  }
  return(passGenerate.join("")); 



};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
const randomValue = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
let passwordLength = prompt("Password length?");
while (passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be between 8 and 128 characters");
  passwordLength = prompt("Password length?");
}
let upperCase = prompt("Include Uppercase?");
let lowerCase = prompt("Include lowercase?");
let inclNumber = prompt("Include Number?");
let inclSymbol = prompt("Include symbol?");
while (upperCase === null && lowerCase === null && inclNumber === null && inclSymbol === null) {
  alert("Must include at least one of the character options");
  upperCase = prompt("Include Uppercase?");
  lowerCase = prompt("Include lowercase?");
  inclNumber = prompt("Include Number?");
  inclSymbol = prompt("Include symbol?");
}
 const generators = [];
 if(upperCase !== null ){
   generators.push("upper");
 }
 if(lowerCase !== null ){
  generators.push("lower");
}
if(inclNumber !== null ){
  generators.push("number");
}
if(inclSymbol !== null ){
  generators.push("symbol");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let password = "";
  if (upperCase === "") {
    password += getRandomUpper();
  }
  if (lowerCase === "") {
    password += getRandomLower();
  }
  if (inclNumber === "") {
    password += getRandomNumber();
  }
  if (inclSymbol === "") {
    password += getRandomSymbol();
  }
  for (let i = password.length; i < passwordLength; i++) {
    let genkey = generators [Math.floor(Math.random() * generators.length)]
    console.log(genkey)
    password += randomValue[genkey]();
  }
  return password;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+}{-=][]}";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomNumber());
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomSymbol());

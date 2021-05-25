
//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
const input = require('readline-sync');
let str = "LaunchCode";
let firstPart= str.slice(0,3);
let secondPart = str.slice(2,str.length);

console.log(secondPart+firstPart);
let newString = secondPart+firstPart;


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`the original string is ${str} this is the modified string ${newString}`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter your word...");
let numberToSlice = input.question('how many letters would you like to move?');



//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numberToSlice > userInput.length){
numberToSlice = 3;
console.log('Number to large! defaulting to first 3')

}

let firstPartUser = userInput.slice(0,numberToSlice);
let secondPartUser = userInput.slice(numberToSlice,str.length);

console.log(secondPartUser+firstPartUser)
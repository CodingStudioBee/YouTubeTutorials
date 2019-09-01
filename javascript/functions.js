//DECLARING FUNCTIONS AND FUNCTION EXPRESSION


// Declaring:
function pureAdd(a, b) { // The a and b are called parameters and they represent values that will be used once the function is called with real numbers
  return a + b; // return value: the function will return the added values of a and b.
} // Note that this does nothing on its own. You have to call the function with real values. (exapmle the line below)
pureAdd(1, 2) // calling the function. this case a = 1 and b = 2. The return value should be 3.
console.log(pureAdd(1, 2))


//Function expressions
const pureAdd2 = function (a, b) {  //The following three ways, serve absolutely the same purpose and return the same thing
  return a + b;
}// There are some differences in how they work and when should they really be used, but thats for a more advanced videp
console.log(pureAdd2(1, 2))

const pureAdd3 = (a, b) => { //This("=>") is called fat arrow and in this case it just gets rid of the 'function' keyword
  return a + b;
}// just compare this with pureAdd2 to see the usage of it.
console.log(pureAdd3(1, 2))

const pureAdd4 = (a, b) => a + b; // this is a shortand version of the functino expression with fatarrow. It does the same thing as the others.
console.log(pureAdd4(1, 2))

pureAdd(5,6) // this is how you call the function
//hint: 11

// WHAT ARE FUNCTIONS GOOD FOR

//Avoiding code duplication
function repeatSomething(n, stringToRepeat) { // this is a function that repeats a string n times
  for (let i = 0; i < n; i++) { // this is a for loop(more info in the loop.js file, or the according YT video)
    console.log(stringToRepeat);
  }
}//With this function we can repeat any string, any number of times without writing the whole code, you can just call it:
repeatSomething(5, 'apple'); // This will write the word 'apple' 5 times, with only 1 line of code.


// PURE FUNCTIONS OR NOT PURE FUNCTIONS

//Example for a pure function
function addFive(a) {
  return a + 5;         // This function takes in data and returns the transformed data without influencing anything else in the program
} // I would like to note, that the function returns an integer.

//Example for unpure function
let sideEffect = 0; // <-- this is a global variable

function changeSomething() {
  sideEffect++; // adds 1 to the sideEffect variable
}// this is called a void function because it returns nothing, only changes something globally

// OR

function sideEffect(integerValue) { // It still isnt a pure function, even though its parameter because:
  if (sideEffect > 3) {                   // -Still causes a global var to change
    sideEffect = 0;                       // -Doesn't have a return value( so it is a void function)
  } else {
    sideEffect += integerValue;
  }
}
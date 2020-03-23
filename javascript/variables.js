'use strict';

/* ADDITIONAL INFO
var    <-- changeable later
       <-- function scope
       <-- hoisting (that means that the declaration itself gets "transported" to the top of the document, but the value doesn't)
       <-- isn't really used since ES6
_________________________________       
let    <-- changeable later
       <-- block scope
       <-- doesn't hoist
       <-- came with ES6
_________________________________
const  <-- constant value (cannot be changed later)
       <-- block scope
       <-- doesn't hoist
       <-- came with ES6
*/

//VAR
console.log(myNumber); // <- to demonstrate hoisting. it doesnt throw an error, but it doesnt know the value
var myNumber = 5; // <- declaring myNumber to be equal to 5;
console.log(myNumber); // now it knows the value too and logs it out to the console.

myNumber = myNumber + 1 // the value can be changed

var myOtherNumber = myNumber + 6 // can declare variable, that is based on another variable
console.log(myOtherNumber) //should log out 11


//LET
let myName = 'Bee' // variables can be other than numbers of course
console.log('My name is ' + myName)
myName = MyName + 's' //can be changed
console.log(myName)
myName = 'Wasp'
console.log(myName)
let newVariable = myName // you can make two different variables too

let newObject = {
  name: myName + 'Ant',
  oldName: newVariable   // a variable can almost be anything: number, text, object...etc. or even a function
}

//CONST
const unmoveableObject = {
  philosophy: 'I cannot be changed'
}
console.log(unmoveableObject)

unmoveableObject = {
  philosophy: 'I will still try'  // this will throw an error since variable declared with const are not changeable
}



//scope

function myFun() {
if(true){
  let a = 0;
  const b = 1;
  var c = 2;
}
console.log(a)
console.log(b) /// from these three console.logs only the "c" would be able log out the number, because thats function scope.. it means
console.log(c) /// that the var is accessable in the whole function, but the "a" and "b" are blockscope so they are only accessible 
               /// in their block which is the "if" block inside the function. imagine a block as the code between {} <-- these

}




/* Basically all of these do the same thing, only with minor differences. the most notable differences is with the const,
 that it cannot be changed, or that the var is a different scope */
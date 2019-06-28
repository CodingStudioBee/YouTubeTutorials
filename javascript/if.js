let valueTrue = true; // true and false are boolean values in javascript. the conditions in the 'if' statements are evaluated to either true or false
let valueFalse = false;

let str = 'this is a string'


// there is a difference between '=', '==' and '==='
// = <-- this is to give value;
// == <-- this is to compare values without checking type for e.g: (5 == '5') <-- thats true even if the second argument is a string
// === <-- this is to compare values AND types                e.g: (5 === '5' ) <-- false, because they are of different types;



if(1 < 2){ // if 2 is bigger than 1, then it is true and the code block will execute;
  console.log('yes, one is bigger than 2');
}

if(valueTrue === true){  // checking if valueTrue is equal to true or not.
  console.log('the value was ' + true);
}else{                                  // if the condition isn't true the statement jumps to the else statement and executes the code there 
  console.log('the value was ' + false);
}

if(valueTrue){ // if the value itself is boolean with can just put it in as a condition, without checking it against something
  console.log('this is a valid condition');
}


if(valueTrue && valueFalse){  // if both conditions are evaluated to true, only the will the code execute. if one of them isnt, it goes to the else statement,
  console.log('the conditions were met');
}else{
  console.log('the conditions weren\'t met');
}

if(valueTrue === false || valueFalse === false){ //the code will execute if one or both are evaluated to true;
  console.log('at least one of the conditions were met');
}else{
  console.log('none of the conditions were met');
}

if(str){ // javascript evaluates everything to true or false, so if the variable exists or has length, it will be cinsidered true
  console.log('this is valid too, because the str exists and isnt 0 or undefined');
}

if(0){ // 0, null, undefined, NaN, false, are all evaluated as false. so be careful.
  console.log('something');
}else{ // else will execute because 0 is false;
  console.log('zero is interpreted as false in a statment in javaScript');
  console.log('same goes for /false, null, undefined, NaN/');
}

// else if
let myNum = 42;

if(myNum <= 2){
  console.log('it is smaller or equal to 2')
}else if(myNum <= 10){                       // 'else if' is used, if the first condition isnt true, but we want to check other condition instead of a simple else-block 
  console.log('it is smaller or equal to 10')
}else if(myNum <= 20){
  console.log('it is smaller or equal to 20')
}else if(myNum <= 50){
  console.log('it is smaller or equal to 50')  // since myNum is 42, which is bigger than 20 but smaller than 50, this code will execute
}else if(myNum <= 100){
  console.log('it is smaller or equal to 100')
}else{
 console.log('it is bigger than 100')
}


//ALTERNATIVES

// Switch-Cases
// When ther is a lot of posibilities, i think it is a better practice to use switch cases instead of else if-s.
switch (true) {   // the value we are checking against. The case compares against the switch value.
  case (myNum <= 2): // the condition
    console.log('it is smaller or equal to 2') // what to execute, if the condition is met
  break;
  case (myNum <= 50):// cases are the else if-s
    console.log('it is smaller or equal to 50')
  break;           // break is the end of the else if
  case (myNum <= 100):
    console.log('it is smaller or equal to 100')
  break;
  default:        // default is the final else, if none of the above was true
      console.log('it is bigger than 100')
  break;
}

//Ternary operator
// this is used if the if statement is short/clear and there aren't any else if-s

myNum <= 2 ? console.log('myNum is smaller or equal to 2') : console.log('myNum is bigger than 2'); 
// the statment before the '?' is the condition
// the codeblock after the '?' is what gets executed if the condition is true
// then the codeblock after the ':'  is the else block, so what gets executed if the condition isnt evaluated to true

// it is possible to use else if in a ternary, but it is hardly readable, so it isnt a good practice. but for an example.
//also you can return values from a ternary like so:

let solution = myNum <= 2 ? 'smaller than two' : myNum <= 10 ? 'smaller than ten' : 'bigger than ten'; // NOT GOOD PRACTICE
console.log(solution)
// what i did is in the else block of the ternary i put another ternary. with a normal if statement it would look like this:

let sol;                    //
if(myNum <= 2){             //
  sol = 'smaller than two'  //  /
}else{                      // /
  if(myNum <= 10){          ///__________NOT A GOOD PRACTICE AT ALL
    sol = 'smaller than ten'//\
  }else{                    // \
    sol = 'bigger than ten' //  \
  }                         //
}                           //
console.log(sol)            //
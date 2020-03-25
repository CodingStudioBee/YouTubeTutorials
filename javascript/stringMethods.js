// Basic string methods

const insect = 'bumblebee';

console.log(insect.length); // <-- returns the length of the given string

console.log(insect.toUpperCase()); // <-- turns the given string into uppercase

let myNumber = 42; 

console.log(myNumber.toString(), ' is a  ', typeof myNumber.toString()) // <-- turns a number into a string. (typeof <-- tells the type of the value after it) 

console.log(insect.charAt(2)); //  /
                               //<   ==== these two string methods do the same, they find the character at the given index (2 in this exapmle)
console.log(insect[2]);        //  \

console.log(insect.includes('bee')) // <-- Returns a boolean value based on if the given string(insect="bumblebee") contains the argument('bee') or not ( true in this case )

console.log(insect.split('u')) // <-- splits up the string at every occurence of the given string("u" in this case) into an array.

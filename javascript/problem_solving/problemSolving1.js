// Task 1  Will you make it?

/*
You were camping with your friends far away from home,
but when it's time to go back,you realize that you fuel is running out and the nearest pump is 50 miles away!
You know that on average, your car runs on about 25 miles per gallon.
There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive. */

// solution here...
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    minFuelNeeded = distanceToPump / mpg;  // calculates the fuel needed by dividing the distance woth the milage, then saves it into the minFuelNeeded variable
    willIMakeIt = (minFuelNeeded <= fuelLeft) // checks if fuelLeft is bigger or equal to the minFuelNeeded var's value, and saves the boolean result to the willImakeIt variable.
    return willIMakeIt; // returns the willImake it variable (which is a boolean(true or false))
  }; // sidenote: this function can be shortened significantly as the below example shows:

/* 
const zeroFuelShortVersion = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft // --> It does the same thing as the above one without saving values to variables
*/




// Task 2 Sum of odd numbers

/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

@examples:
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

*/

// solution here...

function nthRowElement(n) { // <-- this function gives back the placement of the last odd number in a given row (e.g: given 2nd row, it gives back 3 which is the placement of the last element(5) in the second row(counting from top down left to right))
    let nth = 0; //  <-- initial value
    for(let i = 0; i < n; i++){ // iterates "n" times ("n" represents row)
        nth += i + 1 // adds to the "nth" value based on row number (row1 --> 1; row2 --> 2 --> 3) so if n is 2 the final nth will settle at 3
    }
    return nth // <-- returns nth (if you aren't familiar with return please check the functions file/video )
}

function findTheNthOddNumber(n) { // A function to find the nth positive odd number
    n-- // subtractin one from n so that we can get the first positive odd number(1)
    return 1 + n * 2 // something times 2 is always even so we are adding 1 to make it odd --> (instead of saving the value into variable we are returning it right away)

}

function rowSumOddNumbers(n) { // function to return the sum of all the numbers in the given("n") row.
    let sum = 0; // initial value
    for(let i = 0; i < n; i++){ // iterating as many times as there are numbers in that row (conviniently there are the same number of values in a row as n ((first row has 1, second row has 2, third has 3 ..etc))  )
        sum += findTheNthOddNumber( // --> we are adding the nth odd number to the sum for every iteration
            nthRowElement(n) - i // e.g.: if n == 3 than in the three iterations, then we will be adding nthRowElement - 0(i), nthRowElement - 1(i),nthRowElement - 2(i) which would be ===> 6,5,4 which would get turned into the values by fintdTheNthOddNumber ===> 7,9,11 which is 27(correct answer)
        )
    }
    return sum; // returns the final sum (if "n" is 3 then 27)
}



//Task 3 More Zeros than Ones

/* Create a moreZeros function which will receive a string for input, and return an array containing only the characters 
from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples
 a -> ASCII -> 97 -> binary -> 1100001 >> there are more 0s than 1 >
'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. */

// solution here...

const splitAndFilterInput = (stringInput) => { // function to split the argument it gets and filter out character duplications
    let characterArray = stringInput.split(''); // --> split the string to an array which contains the characters from the string one by one
    let tmp = {}; // decalring and empty object called tmp (tpm/temp usually used to store temprorary values <-- this is a convention)

    characterArray = characterArray.filter(character => { // using the array method "filter" to see if there is a char duplications or not
        if(tmp[character]){ // it is checking if a certain key exists in our temp object
            return false // if it exists, we return false (filter works in a way the if you return false then it didnt pass the filter so the value will be "kicked out" from the array, if you return true you keep the value ()in this context I mean "character" by value)
        }else{
            tmp[character] = 1; // if it doesnt exist, we create a key by the name of it and give it a value, so next time we encounter the value, we just kick it out so there wont be duplication
            return true // and we return true, to keep the current value in the array
        }
    })
    return characterArray // we return the filtered array
}

const stringToBinary = (stringInput) => { // simple function to turn our string to ASCII character code then turn that code to binary
    return stringInput.charCodeAt().toString(2) // .charCodeAt turns our string to its ascii code, and .toString(2) turns that to binary (these are built in methods in javaScript)
}

const hasMoreZeros = (binaryString) => { // a function that returns true or false based on if the string has more zeros than ones 
    return 3  >= binaryString.replace(/0/g, '').length // the replace method replaces the first argument with the second argument (on this case the "0" characters with nothing so we are gonna be left with ony 1s) then checking and returning if there are less or ones than 3
}


function moreZeros(s){ // the function that turns the string into a filtered array using all three functions above
return splitAndFilterInput(s).filter(char => hasMoreZeros(stringToBinary(char))) // breaks and filters the string with out splitAndFilterFunction
                                                                                 // then filters again by turning the character to binary and using it as an argument for hasMoreZeros( which returns a binary so the filter will only keep the elements if the return value is true)
}                                                                                // then instead of saving the finalized array to a variable we return it right away

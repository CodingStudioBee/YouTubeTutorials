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
    minFuelNeeded = distanceToPump / mpg; 
    willIMakeIt = minFuelNeeded <= fuelLeft
    return willIMakeIt;
  };



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

function nthRowElement(n) {
    let nth = 0;
    for(let i = 0; i < n; i++){
        nth += i + 1
    }
    return nth
}

function findTheNthOddNumber(n) {
    n--
    return 1 + n * 2

}

function rowSumOddNumbers(n) {
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += findTheNthOddNumber(
            nthRowElement(n) - i
        )
    }
    return sum;
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

const splitAndFilterInput = (stringInput) => {
    let characterArray = stringInput.split('');
    let tmp = {};

    characterArray = characterArray.filter(character => {
        if(tmp[character]){
            return false
        }else{
            tmp[character] = 1;
            return true
        }
    })
    return characterArray
}

const stringToBinary = (stringInput) => {
    return stringInput.charCodeAt().toString(2)
}

const hasMoreZeros = (binaryString) => {
    return 3  >= binaryString.replace(/0/g, '').length
}


function moreZeros(s){
return splitAndFilterInput(s).filter(char => hasMoreZeros(stringToBinary(char)))
}

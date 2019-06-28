
//declaring an array

let myArray = [];                             // creating an empty array (good practice)
let myArray2 = ['item1', 'item2'];            // creating an array with 2 values/elements in it (good parctice)

console.log(myArray);
console.log(myArray2);

let arr = new Array(10);                      // creating an array with 10 undefined/empty elements (NOT A GOOD PRACTICE)
let arr2 = new Array(1,2,3,4,5,6,7,8);        // creating an array with predetermined elements (NOT A GOOD PRACTICE)

console.log(arr);
console.log(arr2);

// the length property
let stringArr = ['bee', 'dog', 'cat', 42, 'parrot', 'honey badger']; // there can be multiple types of data/items in an array
console.log(stringArr.length);                // the length property gives back the amount of elements the array has


//accessing the values of an array
console.log(stringArr[0]);                    // array indexes count from 0, so the first element in this case is stringArr[0]
console.log(stringArr[5]);                    // gives back the sixth element from the array
console.log(stringArr[stringArr.length - 1]); // gives back the last element of the array. the length is 6 so the last element is stringArr[5]


// getting index of an element/item in an array
console.log(stringArr.indexOf(42));           // it gives back the index of the value in the array
console.log(stringArr.indexOf('this animal isn\'t on this list')); // if the value is not found in the array, it gives back '-1'


//Adding to an array
stringArr.push('zebra');                      // push appends the value zebra to the end of the array
console.log(stringArr);
stringArr.unshift('wasp');                    // unshift adds the value wasp to the beginning of the array
console.log(stringArr);

stringArr = [...stringArr, 'bumblebee'];      // adds bumblebee to the end of the stringArr array using the spread operator
console.log(stringArr);
stringArr = ['hornet', ...stringArr];         // adds hornet to the beginning of the stringArr array using the spread operator
console.log(stringArr);

// Making an existing array empty

stringArr.length = 0; // making the array's length equal to zero deletes every value inside now string stringArr = [];
//or
stringArr = [];       // the result is the same, but i belive the first one is a better practice;


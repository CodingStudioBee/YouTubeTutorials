/*includes, find, reverse, slice, join, forEach, sort, every, some, map, filter, reduce */

// EXAMPLE ARRAYS

let myStringArray = ['a', 'd', 'g', 'c', 'b', 'f', 'e', ];

let animals = ['bee', 'wasp', 'bumblebee', 'hornet', 'fly']

let myNumberArray = [5, 9, 6, 1, 3, 7, 2, 4, 8];

let myUserObjectArray = [
{
    name: 'Bee Highve',
    age: 49,
    username: 'XxX.67.BeeHiveDestroyer.67.XxX',
    registrationYear: 2009
},
{
    name: 'Hornet Hole',
    age: 37,
    username: 'Ben',
    registrationYear: 2018
},
{
    name: 'Bumblebee Nest',
    age: 17,
    username: 'PianoSolo',
    registrationYear: 2006
},
{
    name: 'General Kenobi',
    age: 60,
    username: 'Hello_There',
    registrationYear: 2012
},
{
    name: 'The Magnificent Honey Badger',
    age: 21,
    username: 'Duck_You',
    registrationYear: 2008
},
{
    name: 'Neil Wasp',
    age: 12,
    username: 'Pucking_Well',
    registrationYear: 2020
},
]


// INCLUDES:

// console.log(myNumberArray.includes(7)) //includes gives back a boolean value based on if the array includes a the argument (7). this case it is true
// console.log(myNumberArray.includes(11)) // this case it is false
// console.log(myStringArray.includes('b')) // works with strings too


// FIND:

// console.log(myUserObjectArray.find(value => value.name === 'Bee Highve')) // find takes a function as a parameter where you create a condition against the value. find returns the first value that matches to the condition (here I want to find an object where the name is "Bee Highve" and 'find' will return the whole userObject where this condition is true)
// console.log(myUserObjectArray.find(value => value.name === 'This Name Doesn\'t exist')) // find returns undefined if no elements match the condition

// REVERSE:

// console.log(myStringArray.reverse()) // reverses the order of an array
// myStringArray.sort()
// console.log(myStringArray.reverse()) // to make it more visible I sorted the array before reversing it (more on sort below)

// SLICE: 

// console.log(animals.slice()) // in this case it simply makes a copy of the original array --> though i wouldn't use it for that purpose
// console.log(animals.slice(1,3)) // returns an array containing the elements from  index 1 to 3 (including first argument, index 1(second element), but excluding second argument, index 3(fourth element)) returns [wasp, bumblebee]
// console.log(animals.slice(1)) // returns an array starting from the first index(second element) (basicallly starts the new array from the index given as argument)
// console.log(animals.slice(3,1)) // return empty array, you cannot give a higher index as first argument
// console.log(animals.slice(-2)) // gives back the last 2 elements of the array (if given a negative number as the first argumnet) it will return the last elements of the array based on the absolute value of the argument given.
// console.log(animals.slice(-4, 2)) // returns the array between the 2 indexes -4 being if you count 4 from the end of the array and the second argument (2) being where to stop in this case it returns ['wasp']

// JOIN:

// console.log(myStringArray.join()) // returns the array as one string value with commas(',') between the elements.
////
// =!=!=> join takes one string argument, when it joins the array together it will put that argument between the elements (default is the comma:','), if you dont want anything between tham you can just give it an empty string as an argument
////
// console.log(myStringArray.join('')) // if you want a clean join without commas, you can give an empty string as an argument.
// console.log(animals.join(' and ')) // of course you can put longer strings between each element

// FOREACH:
//animals.forEach((element /* you can replace 'element' with whatever you like, because this is a parameter, naming is up to you*/) => {
//    console.log(element)
//}) // in this case it just logs out the elements in the array to the console one by one


/* animals.forEach(animal => {
    if(animal.includes('bee')){ // Fun fact, includes works on strings as well
        console.log(`The ${animal} is a fantastic animal`)
    }else{
        console.log(`The ${animal} is not so cool`)
    }
}) */ // you can make operations with the array elements inside this callback function (this case it is just a condition based string output)

// SORT:

// console.log(myStringArray.sort()) // --> sorts to alphabetical order (sort compares the current value to the next value, and the callback function returns 1, -1 or 0 if the first one is bigger than it returns 1 is smaller it returns -1 if equal it returns zero see belows example: ) 
/* console.log(myStringArray.sort((a,b) => { // sort with callback function --> in this case, it does the same thing as the above example
    if(a > b){return 1};
    if(a < b){return -1};
    return 0;
})) */

// console.log(myNumberArray.sort((a,b) => a-b)) // in case of numbers it is the same as myNumberArray.sort()
// console.log(myNumberArray.sort((a,b) => b-a)) // if you sort numbers you can easily change the order to descending

// EVERY:

// console.log(myStringArray.every((element) => typeof element === 'string')) // 'every' takes a callback function, where you set up a condition every element has to match (this case if everything is a string type value), and returns a boolean (this case the output is true)
// console.log(animals.every(animal => animal.includes('bee'))) // this time the condition is that every element should have the string 'bee' in it (since not all elements include 'bee', the output will be false)

//SOME:

// console.log(myStringArray.some(element => typeof element === 'string')) // 'some' is a less strict 'every' if some values/elements are string it is enough for it to return true.
// console.log(animals.some(animal => animal.includes('bee'))) // as long as at least one element includes the string 'bee' it will return true
// console.log(myNumberArray.some(element => typeof element === 'string')) // if none of the elements match the condition, 'some' will return false 

//!!! MAP:

// The blow map will make changse to the myUserObjectArray's objects -> Where the registrationYear is below 2010 it will add a premium property
/* myUserObjectArray.map(user => { // We use map to make changes to the values inside the array
    if(user.registrationYear < 2010){ // condition: registration year is under 2010
        user.premium = true // creates premium property with the value true (alt.: user['premium'] = true)
    }
    return user // after the changes are done we return the value
}) */
// myUserObjectArray = myUserObjectArray.map(user => user.registrationYear < 2010 ? {premium: true, ...user} : user) // shorter way to do the same, with spread operator and ternary operator
// console.log(myUserObjectArray)

// FILTER:

// console.log(myUserObjectArray.filter(user => user.age < 18 )) // 'reduce' filters an aray based on the condition in the callback function, if the condition is true the current value stays in the array, if it is false it gets 'kicked out'  of the array. (now we are filtering for age and the condition is that age is bigger than 18)  (shorter version with object destructuring: // myUserObjectArray.filter(({age}) => age > 18) // )
// A more elaborate example for the same functionality below:
/* myUserObjectArray.filter(user => {
    if(user.age < 18){
        return false
    }else{
        return true
    }
}) */  // this filter is exactly the same as the above example, I only wrote out the logic behind

//console.log(myUserObjectArray.filter(user => !user.username.includes('Duck') && !user.username.includes('Puck'))) // this is a simple filter that checks if the usernames have swearwords(Duck, Puck) in them and returns the list of "clean" users ('!' before a boolean changes them to their opposite (true to false for e.g.) because in this case we want the ones that doesnt contain these words)

// REDUCE:
// !!!! reduce has an accumulator as the first parameter and the current value is only the second parameter !!!!

/* console.log(myNumberArray.reduce((accumulator, currentValue) => { // accumulator is a sum that starts as the first value in the array, and you can add to this value after each iteration
    return accumulator + currentValue // in this case we are always adding the current value to the accumulator (so we are basically summing the values of the array)
})) */

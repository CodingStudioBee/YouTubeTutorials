// WHILE LOOP
// This is mainly used where the number of iterations needed are unknown.
// Think of it this way: While the argument is true, the loop continues.

// Example

let maxNumber = 500; // this is a base case of sorts.
let iterations = 0; // this is an indicator of hiw many times we have done the loop
while (iterations < maxNumber) { // Checking the argument. if it is true, it will continue to the next line, else it will break
  iterations++; // adds one to iterations
} // So while the iterations is a smaller number than 500 it will add 1 to iterations. The loop will run 500 times.

// Other example
while (Math.random() < 0.6) {
  console.log("The random number was smaller than 0.6")
} // this is an example where we dont know how many times the loop will continue (Math.random() returns a value between 0 and 1)

//FOR LOOP
// This is used a lot more than while loops, this loop iterates a fixed number of times (most of the times)


// Examples

//Regular
// Structure: for(Created variable for counting(many times it is called "i"); condition, just like in the while loop, here too it serves to set a limit to how many times the loop iterates; and an action with the counter (usually adding or subtracting) )

for (let i = 0; i < 10; i++) {
  console.log(`it has iterated ${i} times`);
}
//Example usage:
let exampleArray = [1, 2, 3, 4, 5, 6, 8, 9]; //Array to work with in the for loop

for(let i = 0; i < exampleArray.length /* making sure it iterates as many times as there are elemts in the array */; i++){
  exampleArray[i] += 2; // adding 2 to the i-th element
}
console.log(exampleArray) // <-- all the elements in the array were increased by two

// On a side note here: There are array methids in javascript that can help us do basically anything with arrays
//(continuing the previous line) on an iterative basis (e.g.: foreach, map, sort, filter...etc), but that is a large topic, so it will have its own file and video


// There are two special types of for loops:
//For of

//if you run te code below, you can see that it gives us the i-th value of the array without calling it directly like befire (exampleArray[i])
for(let i of exampleArray){ //(structure: declaration of 'i'; name of array/object)
  console.log(i)            // Will log tha i-th value to the console.
}


//For in

//this "for" is mainly used to iterate over object properties. like so:
exampleObj = {key:1, anotherKey:2, yetAnotherKey:3}
for(let i in exampleObj){     //(structure: declaration of 'i'; name of array/object)
  console.log(i)              // Will log the key's name to the console
  console.log(exampleObj[i])  // Will log the value's name to the console
}
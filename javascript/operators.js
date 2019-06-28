// + (Addition)
let one = 1;
let otherOne = 1;

console.log(one + otherOne); // possible to add the values of the variables together
console.log(1 + 1); // simple addition

console.log('1' + 1); // string values are added together as strings (appending to the end)
console.log(1 + '1');
console.log('1' + '1');

console.log('string ' + 'string2'); // appends to the end of the first string

// - (Substraction)
console.log(11 - one); // simple substraction
console.log('5' - '1'); // as long as the strings value is a number substraction is possible
console.log('string'- 'g'); // cannot substract strings that arent numbers (it gives back NaN(Not a Number))

// * (Multiplication)
console.log(1 * 5); // simple multiplication
console.log(2 * '2'); // same rule as the substraction
console.log('2' * 2);
console.log('2' * '2');

// / (division)
console.log(4 / '2'); // simple division
console.log('4' / 2);
console.log('4' / '2');

// % (Modulus)
console.log(5 % 2); // division remainder
console.log('5' % 2); // same basic rules apply
console.log(5 % '2');
console.log('5' % '2');

// ** (Exponentiation) // takes the left side of the operation to the power of the tight sides
console.log(2 ** 2);  // 4
console.log(2 ** 10); // 1024


// shorthand examples

console.log(++one ,one++) // add 1, add1
console.log(--one, one--) // subtract 1, subtract 1

otherOne += 1 // otherOne = otherOne + 1
otherOne -= 1 // same
otherOne *= 1 // -||-
otherOne **= 1
otherOne /= 1

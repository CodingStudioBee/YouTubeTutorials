

const myObject = { //declaring the object (can also be done with 'let', or 'var')
keyNoOne : 'apple', // creating key value pairs: [key] : [value] ,
keyNoTwo : 2, // values can be numbers as well
keyNoThree : { insideObjectKey : 'pear' }, // or objects
keyMethod : function(){ return 'peach' } // or even functions. these are called methods
}

console.log(myObject); // console logs out the whole object
console.log(myObject.keyNoOne); // the way to access the objects key is to using [object].[keyname]
console.log(myObject.keyNoThree.insideObjectKey); //you can access the inner objects key by chaining the key names
console.log(myObject.keyMethod()); // you can call on the object methods this way

console.log(myObject['keyNoTwo']); // you can call on the object keys with square brackets as well, but you have to put the keyname in as a string.

//an other way to create an object is using a constructor of the Object class:

const mySecondObject = new Object(); // it creates a new empty object {}
console.log(mySecondObject);

mySecondObject.fruit = 'banana'; // you can add key value pairs after the object is created, by simply making a key equal to a value
console.log(mySecondObject);
mySecondObject.fruit = 'pineapple'; // it is also possible to change the values on the keys.
console.log(mySecondObject);

//OBJECT DECONSTRUCTING

let user = {
  username : 'Bee',
  password : 'password123',
  age: 23,
  registration_date: '13/21/2019 13:02:58:0234',
  token : 'aBc1tWo3cDe4fOuReFg5fIvE',
}

const { username, age, registration_date } = user; // declaring object keys in curly braces than making it equal to the object, you can use the keys as variables
console.log('The ' + age + ' year old ' + username + ' registered at ' + registration_date); 


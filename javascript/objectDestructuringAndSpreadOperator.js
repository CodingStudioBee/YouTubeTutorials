// Object Destructuring and Spread Operator

let user1 = {
    username: 'Bee',
    age: 29,
    email: 'bee@hive.ins'
}


function addPassword(user) {
    let password = 'secure';
    //takes the user object and adds password with spread operator
    return {...user, password}
}

    // console.log(addPassword(user1))

function birthday({age, ...rest}) {

    // takes a user gets the age and the rest of the properties with spread, adds one and returns the object with spread
    return {age: age+1, ...rest}
}

console.log(birthday(user1))
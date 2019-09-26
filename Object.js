let o1 = new Object(); // "object constructor" syntax
let o2 = {};  // "object literal" syntax

o2 = {
    name: 'Sai',
    age: 100
}

// To remove a property, we can use delete operator:
delete o2.age;

//-----------------------------------------

let o3 = {
    'big key': 1
}

o3["big key"] // 1
o3.big key //Error

//-----------------------------------------
//Reserved words are allowed as property names
let obj = {
    for: 1,
    let: 2,
    return: 3
};

//-----------------------------------------
function makeUser(name, age, some) {
    return {
        name: name,
        age: age,
        some: some + 1
        // ...other properties
    };
}

// is same as this 

function makeUser(name, age) {
    return {
        name,
        age,
        some: some + 1
    };
}

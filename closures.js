/**
 * Lexical Scope
 * In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

    Every variable or function will have lexical scope which consists of current lexical Environment and outer([[Environment]]). Environment will have its current inner data and outer will have outside variables/functions where it is being called from.

    The function will be initialized whenever the script starts or when it is created. In case of variables, it will be initialized when Lexical environment is created. In other words, when execution starts, the functions will already be available but variables will be only after it.

    The function will consider value from its own if existing Lexical environment and then it will search in the outer if not existing in current environment, It will go till the root searching for the value
 */

let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete"; // (*)

//here the name is already modified in the outer scope and execution occurs after name is modified hence it takes the modified one
sayHi(); // Pete

//Consider the below scenario

let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}
// Here the execution occurs while the name is John
sayHi(); // John

name = "Pete"; // (*)

//Here the name is changed again and when execution occurs, it picks the recent value from outer
sayHi(); // Pete

function makeCounter() {
    let count = 0;

    return function () {
        return count++
    }
}

let counter = new makeCounter()
console.log(counter)

function makeCounter() {
    let count = 0;

    function inner() {
        count++
    }

    inner()
    console.log(count)
}

makeCounter()
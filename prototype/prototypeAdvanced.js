/**
 * The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it.
 */
let obj = {}
obj // [object Object]

/**
 * Where’s the code that generates the string "[object Object]"? That’s a built-in toString method, but where is it? The obj is empty!

…But the short notation obj = {} is the same as obj = new Object(), where Object is a built-in object constructor function, with its own prototype referencing a huge object with toString and other methods.
 */

//So then when obj.toString() is called the method is taken from Object.prototype.

/**
 * By specification, all of the built-in prototypes have Object.prototype on the top. That’s why some people say that “everything inherits from objects”.
Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.
 */

let arr = [1, 2, 3]

//The above array inherits [[Prototype]] from Array.prototype which again inherits from Object.prototype

//Whenever we do `new` then the prototype from Array is transfered to local __proto__ of arr
//For instance, when we create an array [1, 2, 3], the default new Array() constructor is used internally. So Array.prototype becomes its prototype and provides methods. That’s very memory-efficient.

let arr = new Array([1, 2, 3]) //same as above line
arr.__proto__ == Array.prototype //true
arr.__proto__.__proto__ === Object.prototype; // true
arr.__proto__.__proto__.__proto__ // null - because console.log(Object.prototype.__proto__); // null - Please note that there is no more [[Prototype]] in the chain above Object.prototype

/**
 * Other built-in objects also work the same way. Even functions – they are objects of a built-in Function constructor, and their methods (call/apply and others) are taken from Function.prototype. Functions have their own toString too.
 */
function f() { }

console.log(f.__proto__ == Function.prototype); // true
console.log(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects

//----------------------------------------------------------------------------------------------------------
/**
 * Adding new function to Standard 
 */

Array.prototype.hi = function () {
    console.log('hiiii')
} //ƒ (){ console.log('hiiii') }

[1, 2, 3].hi() //hiiii

/**
 * Custom object - implementing copying the Array.prototype functions to local object
 */

let objArr = {
    0: "Hello",
    1: "world!",
    length: 2,
}

obj.join = Array.prototype.join;
obj.join(',') // Hello,world!

//----------------------------------------------------------------------------------------------------------
//Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.

function f() {
    console.log("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second

//Solution - 

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 sec
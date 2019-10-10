/**
 * In practice, we often need to create many objects of the same kind, like users, or goods or whatever.
As we already know from the chapter Constructor, operator "new", new function can help with that.
But in the modern JavaScript, there’s a more advanced “class” construct, that introduces great new features which are useful for object-oriented programming.

MyClass is technically a function (the one that we provide as constructor), while methods, getters and settors are written to MyClass.prototype.
 */
class MyClass {
    // class methods
    constructor() { }
    method1() { }
    method2() { }
    method3() { }
}

/**
 * Before reading this - read files in prototype and come
 */

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

//Create a instance of this class using new
let user = new User("John");

console.log(user) // see below

/**
User {name: "John"}
name: "John"
    __proto__:
    constructor: class User
    sayHi: ƒ sayHi()
        __proto__: Object
 */

/**
 * Whenever we do new, and object of LHS is created with attaching the prototype of RHS
 */

console.log(typeof User); // function

class User {
    constructor(name) { this.name = name; }
    sayHi() { console.log(this.name); }
}

User.prototype.sayHi() // undefined

let s = new User("hh")

User.prototype.sayHi() // undefined
s.sayHi() // hh

//-------------------------------------------------------------------------------------------
//Class Expression
// Just like functions, classes can be defined inside another expression, passed around, returned, assigned etc.

let User = class {
    sayHi() {
        console.log("Hello");
    }
};

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
    sayHi() {
        console.log(MyClass); // MyClass name is visible only inside the class
    }
};

new User().sayHi(); // works, shows MyClass definition

console.log(MyClass); // error, MyClass name isn't visible outside of the class

function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello

//Class-level properties are a recent addition to the language.

class User {
    name = "Anonymous";

    sayHi() {
        alert(`Hello, ${this.name}!`);
    }
}

new User().sayHi();
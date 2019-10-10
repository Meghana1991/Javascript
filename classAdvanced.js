/**
 * Combination of 
 * Class with Inheritance and Prototyping
 */

class PowerfulArray extends Array {
    // extends the Array, ie the functions of the Array is moved to Powerful
    isEmpty() {
        return this.length == 0
    }
}

let myArr = new PowerfulArray(1, 2, 4, 100, 21, 43, 44, 88) //The prototype is now transferred to myArr

let filteredData = myArr.filter(item => item > 10) // Array function

console.log(filteredData)
console.log(filteredData.isEmpty()) //Powerful Array function

//------------------------------------------------------------------------------------------------------------
/**
 * No static inheritance in built-ins
Built-in objects have their own static methods, for instance Object.keys, Array.isArray etc.
Normally, when one class extends another, both static and non-static methods are inherited. That was thoroughly explained in the chapter Static properties and methods.
But built-in classes are an exception. They don’t inherit statics from each other.

For example, both Array and Date inherit from Object, so their instances have methods from Object.prototype. But Array.[[Prototype]] does not reference Object, so there’s no Array.keys() and Date.keys() static methods.

As you can see, there’s no link between Date and Object. They are independent, only Date.prototype inherits from Object.prototype.

That’s an important difference of inheritance between built-in objects compared to what we get with extends.
*/

class A {
    afunc() {
        console.log('afunc')
    }
}

class B extends A {
    afunc() {
        console.log('bfunc')
    }
}

let bobj = new B();
bobj;

class C extends Object {
    cfunc() {
        console.log('afunc')
    }
}

let cobj = new C();
cobj;
//------------------------------------------------------------------------------------------------------------
/**
 * The instanceof operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.
 obj instanceof Class
 */
class Rabbit { }
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log(rabbit instanceof Rabbit); // true

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
//------------------------------------------------------------------------------------------------------------
// Mixins 
let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};

let sayHiMixinTwo = {
    sayHello() {
        console.log('Hey ', this.name)
    }
}

// usage:
class User {
    constructor(name) {
        this.name = name;
    }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin, sayHiMixinTwo);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

//------------------------------------------------------------------------------------------------------------
//Mixins Inheritance

let mixin1 = {
    sayHi() {
        console.log('Hi')
    }
}

let mixin2 = {
    __proto__: mixin1,

    sayHi2() {
        super.sayHi()
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

Object.assign(User.prototype, mixin1, mixin2)

new User('Sai').sayHi2()
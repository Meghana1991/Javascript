/**
 * The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).
The modern methods are:

Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
 */

let animal = {
    eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal);

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

//Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:

let animal = {
    eats: true
};

let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});

console.log(rabbit.jumps); // true

//We can use Object.create to perform an object cloning more powerful than copying properties in for..in:

let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));//This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].

//-----------------------------------------------------------------------------

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

//The first call has this == rabbit, the other ones have this equal to Rabbit.prototype, because it’s actually the object before the dot.

rabbit.sayHi(); // "Rabbit"

Rabbit.prototype.sayHi(); // undefined

Object.getPrototypeOf(rabbit).sayHi(); // undefined

rabbit.__proto__.sayHi(); "Rabbit" // undefined
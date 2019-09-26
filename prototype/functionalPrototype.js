/**
 *There is a animal function which will have basic details of what animal is. I can create instances or objects of this function like rabbit, monkey etc. Oops I missed to add a function walk in the animal, now what to do? I have already created the animal instances :(. Now 2 scenarios

    Scenario 1 - I have a global function or main function like animal. I have rabbit, monkey as instances. I would prefer to add basic function(not specific) to the animal so that I can avoid to write basic functions to rabbit and monkey.Since rabbit and monkey inherits from animal, I neednot explicitly write it.

    Scenario 2 - I have already build a module with animal and instances rabbit, monkey. I had forgotten to add method type to animal function. Now what? The solution is just add it in the animal and it will reflect in the instances eventhough they are already created
 */

function animal() {
    this.name = 'rover';
    this.set_name = function (name) {
        this.name = name;
    }
}

animal.prototype.set_name = function (name) {
    this.name = name;
}

let rabbit = new Object(animal)

rabbit.name;//"animal"
rabbit.prototype // see down
/**
 * {set_name: ƒ, constructor: ƒ}
set_name: ƒ (name)
constructor: ƒ animal()
__proto__: Object
 */

/**
 * Now Scenario - 2
 */
animal.prototype.walks = function () { console.log('i walk') }

rabbit.prototype //see down

/**
 * {set_name: ƒ, walks: ƒ, constructor: ƒ}
set_name: ƒ (name)
walks: ƒ ()
constructor: ƒ animal()
__proto__: Object
 */
//----------------------------------------------------------------------------------------------------------
/**
 * When you put something on the prototype, every instance of the object shares the same code for the method. They are all using the same function instance.

When you simply put a method on this, every object instance has its own copy of the same method.

 * In the first example, each separate sub has an own property for the set_name function, while in the second example they share the same function via their prototype.

The advantage of the first version is that the methods can access local (private) variables declared inside the constructor.

The advantage of the second method is that it needs less memory (since you only store the method once instead of a million times) and is more performatic in current JS engines.

Using the second method you can also modify or add methods to a class in a way that also affects instances that were already created.
 */
//Example 1
function main1() {
    this.name = 'main1'
    this.set_name = function (name) {
        this.name = name;
    }
}

//Example 2
function main2() {
    this.name = 'main2'
}

main2.prototype.set_name = function (name) {
    this.name = name;
}

let sub1 = new main1();
sub1.set_name('sub1')

let sub2 = new main2();
sub2.set_name('sub2')

/**
 * All objects created by the first function will have different name and set_name properties. However, all objects created by the second function will share the set_name property.

sub1
    main1 {name: "sub1", set_name: ƒ}
    
sub2
    main2 {name: "sub2"}
*/
//----------------------------------------------------------------------------------------------------------
/**
 * Trying to map a object with the function
 */
let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

Rabbit; // function Rabbit(name){ this.name = name }
Rabbit.prototype //{eats : true}

let r = new Rabbit("White Rabbit");
r // see down

/**
Rabbit {name: "White Rabbit"}
name: "White Rabbit"
__proto__:
eats: true
__proto__: Object
*/
//----------------------------------------------------------------------------------------------------------
/**
 * Every function has the "prototype" property even if we don’t supply it.
The default "prototype" is an object with the only property constructor that points back to the function itself.
 */
//----------------------------------------------------------------------------------------------------------
/**
 * The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.
 */

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {} //On emptying will not affect the ones which are already there

let r = new Rabbit()
r.eats //undefined

rabbit.eats // true

/**
 * But change in the value of Rabbit.prototype.eats = false will make false in all the occurances as Objects are assigned by reference. The object from Rabbit.prototype is not duplicated, it’s still a single object referenced both by Rabbit.prototype and by the [[Prototype]] of rabbit.
 */

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // true  -  All delete operations are applied directly to the object. Here delete rabbit.eats tries to remove eats property from rabbit, but it doesn’t have it. So the operation won’t have any effect.

//replace above delete with 
delete Rabbit.prototype.eats;
rabbit.eats // undefined - The property eats is deleted from the prototype, it doesn’t exist any more.
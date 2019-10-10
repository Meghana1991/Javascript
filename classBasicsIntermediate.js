/**
 * The constructor method is a special method for creating and initializing an object created within a class.
 * constructor([arguments]) { ... }
 * A constructor can use the super keyword to call the constructor of a parent class.If you do not specify a constructor method, a default constructor is used.
 */
class Animal {
    constructor(name) {
        console.log('Animal constructor called')
        this.name = name
    }

    run(speed) {
        this.speed = 5
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(this.name, ' hides')
    }
}

let rab = new Rabbit("Whitey")
rab.run(5)
rab.hide();

// Animal constructor called
// Whitey runs with speed 5.
// Whitey  hides

/**
 * If no constructor is specified, it takes from parent by default
 * If child has constructor then we need to call super() first and then add logic in constructor
 */

class Monkey extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    colourFn() {
        console.log(this.name, ' is ', this.color)
    }
}

let mon = new Monkey("Sweety", "grey")
mon.colourFn()
mon.run(5)

/**
 * When the child needs to have a constructor on its own, then its mandatory we call the super() otherwise it throws the error
 * When a normal constructor runs, it creates an empty object and assigns it to this.
   But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.

   In JavaScript, there’s a distinction between a “constructor function of an inheriting class” and all others. In an inheriting class, the corresponding constructor function is labelled with a special internal property [[ConstructorKind]]:"derived".

   So if we’re making a constructor of our own, then we must call super, because otherwise the object for this won’t be created. And we’ll get an error.

   Arrow functions have no super
   The super in the arrow function is the same as in parent function, so it works as intended
 */

//--------------------------------------------------------------------------------------------------------------------

/**
 * The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.
 */

class Triple {
    static triple(n) {
        if (n === undefined) {
            n = 1;
        }
        return n * 3;
    }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18

class Article {
    static publisher = "Ilya Kantor";
}

alert(Article.publisher); // Ilya Kantor
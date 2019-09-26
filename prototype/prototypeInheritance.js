/**
 * The prototype - When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”.
 The property [[Prototype]] is internal and hidden, but there are many ways to set it.

 The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
 */

let animal = {
    'eats': true, 'walk': function () {
        console.log('walk function from animal')
    }
}

let rabbit = { 'jumps': true }
rabbit.__proto__ = animal;

console.log(rabbit.jumps) //true
console.log(rabbit.walk()) //walk function from animal

//Then, when console.log tries to read property rabbit.eats, it’s not in rabbit, so JavaScript follows the [[Prototype]] reference and finds it in animal (look from the bottom up)
//--------------------------------------------------------------------------------------------------------

let bigAnimal = {
    'eats': 'Eats Big',
    'ferrocious': true,
    'runs': function () {
        console.log('Runs Pro')
    }
}

let Tiger = {
    'family': 'cat',
    __proto__: bigAnimal
}

Tiger.runs()

//--------------------------------------------------------------------------------------------------------
/**
 * When the function or variable is overrided in the local object, obviously it picks up the local object's values
 * and as continuation of above -
 */
Tiger.ferrocious = false;
console.log(Tiger.ferrocious)

//-------------------------------------------------------------------------------------------------------

// The call rabbit.sleep() sets this.isSleeping on the rabbit object:

let animal1 = {
    walk() {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit1 = {
    name: "White Rabbit",
    __proto__: animal1
};

// modifies rabbit.isSleeping
rabbit1.sleep();

console.log(rabbit1.isSleeping); // true
console.log(animal1.isSleeping); // undefined (no such property in the prototype)

//-------------------------------------------------------------------------------------------------------

//The for..in loops over inherited properties too.

let fatAnimal = {
    eats: true
};

let rabbit2 = {
    jumps: true,
    sleeps: true,
    __proto__: fatAnimal
};

// Object.keys only return own keys

console.log(Object.keys(rabbit2)); //['jumps','sleeps']

for (let prop in rabbit2) {
    console.log(prop) // jumps , sleeps, eats

    let isOwn = rabbit.hasOwnProperty(prop);

    /**
     * If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method         obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.
     */

    if (isOwn) {
        console.log(`Our: ${prop}`); // Our: jumps , sleeps
    } else {
        console.log(`Inherited: ${prop}`); // Inherited: eats
    }
}

//-------------------------------------------------------------------------------------------------------

let thinAnimal = {
    type: 'land',
    canRun: function () {
        console.log(this.type)
    }
}

let cat = {
    color: 'white',
    type: 'home',
    __proto__: thinAnimal
}

cat.canRun(); //home...If type is not there in cat, then refers to land

//-------------------------------------------------------------------------------------------------------
let a = {
    jumps: null
};
let r = {
    __proto__: a,
    jumps: true
};

console.log(r.jumps); // true

delete r.jumps;

console.log(r.jumps); // null

delete a.jumps;

console.log(r.jumps); // undefined

//-------------------------------------------------------------------------------------------------------

let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

console.log(pockets.pen) // 3
console.log(bed.glasses) // 1
console.log(table.money) // undefined

//-------------------------------------------------------------------------------------------------------

let anim = {
    eat() {
        this.full = true;
    }
};

let rabb = {
    __proto__: anim
};

rabb.eat();

console.log(rabb.full) //true
console.log(anim.full) //undefined

//-------------------------------------------------------------------------------------------------------

let ph = {
    name: 'ph',
    color: 'pink',
    code: '12',
    varient: 'PH'
}

let ch = {
    __proto__: ph,
    name: 'ch',
    color: function () {
        /**
         * Assigning using this will create a new property code 
         * and assign a value to it.
         * this assignment always points to current object
         */
        this.code = 32
    },

    type: function () {
        /**
         * Getting the value using this will go to the chain upwards instead of creating it like above scenario
         * Get of value goes to the upward chain if not in present
         * Set of value always refers to the current object which calls the set
         */
        console.log('type', this.varient)
    }
}

ch.color();
console.log(ch.code)
console.log(ph.code)

ch.type()
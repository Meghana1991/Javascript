/**
 * Accessor propertie - They are essentially functions that work on getting and setting a value. They are
 * Getters and setters - Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set
 */

let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
    },

    set propName(value) {
        // setter, the code executed on setting obj.propName = value
    }
};

//-------------------------------------------------------------------------------------------------

let user = {
    name: 'Sai',

    get fullName() {
        return this.name + ' Baba';
    },

    set fullName(name) {
        this.name = name
    }
}

console.log(user.fullName)

user.fullName = 'Sweety'

console.log(user.fullName)
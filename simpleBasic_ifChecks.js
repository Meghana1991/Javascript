if (0) {
    console.log('Doesnot enter')
}

if (1) {
    console.log('Enters')
}

if (-1) {
    console.log('Enters')
}

if ("") {
    console.log('NO')
}

if (" ") {
    console.log('YES')
}

if (null) {
    console.log('NO')
}

if (undefined) {
    console.log('NO')
}

if ("0") {
    console.log("YES")
}

//----------------------------------------------------------------------------------------------------------------------------

let age = prompt('How old are you?')
//Any ternary however big it is, is always expected to have else at the end
let message = (age < 3) ? 'Hi Baby' : (age > 3 && age < 5) ? 'Heyyy Baby' : (age > 10) ? 'Hi Biggie' : 'What an unusual age'

//----------------------------------------------------------------------------------------------------------------------------
//OR CONDITIONS
console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false

if (1 || 0) { // works just like if( true || false )
    console.log('truthy!');
}

console.log(1 || 0); // 1 (1 is truthy)
console.log(true || 'no matter what'); // (true is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)


let x;
true || (x = 1);
console.log(x); // undefined, because (x = 1) not evaluated


let x;
false || (x = 1);
console.log(x); // 1

//AND CONDITIONS
console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false

if (1 && 0) { // evaluated as true && false
    console.log("won't work, because the result is falsy");
}
/**
 * OR returns the first value always
 * AND returns the second value
 */
console.log(1 || 2) //1
console.log(1 && 2) //2

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

console.log(!true); // false
console.log(!0); // true

console.log(!!"non-empty string"); // true
console.log(!!null); // false

//There’s a little more verbose way to do the same thing – a built-in Boolean function:
console.log(Boolean("non-empty string")); // true
console.log(Boolean(null)); // false

console.log( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) );
//http://javascript.info/logical-operators
//----------------------------------------------------------------------------------------------------------------------------
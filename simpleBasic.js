
// note: no "use strict" in this example

// num = 5; // the variable "num" is created if it didn't exist

// console.log(num); // 5
//----------------------------------------------------------------------------------------------------------
"use strict";

num = 5; // error: num is not defined
console.log(num);

//----------------------------------------------------------------------------------------------------------

let some = 1;
typeof (some) // number
typeof some  // number

//----------------------------------------------------------------------------------------------------------
let value = true
// undefined

typeof value
// "boolean"

String(value)
// "true"

typeof value
// "boolean"
//----------------------------------------------------------------------------------------------------------

console.log(Number("   123   ")); // 123
console.log(Number("123z"));      // NaN (error reading a number at "z")
console.log(Number(true));        // 1
console.log(Number(false));       // 0
//----------------------------------------------------------------------------------------------------------

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // spaces, also true (any non-empty string is true)
//----------------------------------------------------------------------------------------------------------
/**
 * Almost all mathematical operations convert values to numbers. A notable exception is addition +. If one of the added values is a string, the other one is also converted to a string.

Then, it concatenates (joins) them:
 */
console.log(1 + '2'); // '12' (string to the right)
console.log('1' + 2); // '12' (string to the left)
/**
 * This only happens when at least one of the arguments is a string. Otherwise, values are converted to numbers.
 */
//----------------------------------------------------------------------------------------------------------

"" + 1 + 0
// 10 - Here since the string is on one side of the +, it converts the exp to string

"" - 1 + 0
//-1 - Here the + which is concatenation as well as addition operator has both sides as numbers so it takes it like addition

true + false
// means 1 + 0 which results in 1. If it were true + true then it is 2

6 / "3"
//2 - all the mathematical operands will take string on either side as number expect the + which has another meaning of concatenation

4 + 5 + "px"
//9px - the first + has both sides as numbers so it adds whereas the second has one as string so it will concatenate

"$" + 4 + 5
//$45 - Here the first + concatenates to $4 + 5. Hence the second + also concatenates

"4px" - 2
//NaN - Here since the - operator doesn't know what the 4px means, it gives NaN

7 / 0
//Infinity - as you know it

"  -9  " + 5
//"   -9  5" - here the + has extra whitespace along with the number hence it takes like string

"  -9  " - 5
// -14 - here the - always tries to convert the string to number so it will successfully

null + 1
// 1 

undefined + 1
// NaN

//----------------------------------------------------------------------------------------------------------
/**
 * The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
 */
// No effect on numbers
let x = 1;
console.log(+x); // 1

let y = -2;
console.log(+y); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+"");   // 0

//----------------------------------------------------------------------------------------------------------
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0

console.log( 5 % 2 ); // 1 is a remainder of 5 divided by 2
console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
//----------------------------------------------------------------------------------------------------------
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

/**
 * a = 2, b = 2, c = 2, d = 1
 */

let a = 1, b = 1;
let c = ++a;
let d = b++;
//----------------------------------------------------------------------------------------------------------
let a = 2;

let x = 1 + (a *= 2); // 1 + (a = a * 2)
//a = 4, x = 5
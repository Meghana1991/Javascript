let $ = 1; // allowed
let _ = 2; // alloweD
let имя = '...';// allowed
let 我 = '...';// allowed
/**
let 1a; //No
let hey-a; //No
*/

typeof undefined; //undefined
typeof 0 //number
typeof true //boolean
typeof "foo" //string
typeof Math //Object
typeof null //Object
typeof alert //function

//The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility. Of course, null is not an object. It is a special value with a separate type of its own. So, again, this is an error in the language.

Number("hi") //NaN
Number("        12  ") //12
Number("12") //12
Number(undefined) //NaN
Number(null) // 0
Number(true) // 1

console.log(1 + '2'); // '12' (string to the right)
console.log('1' + 2); // '12' (string to the left)

Boolean("0") //true
Boolean(0) //false
Boolean("") //false
Boolean(" ") //true

/**
 * Since the + is exception unlike other math symbols, + will convert the number to string if other opernd is string
 */

"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //Infinity
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 //-14
null + 1 + 3 //1
undefined + 1 //NaN

let counter = 1;
++counter
counter++
console.log(counter) //3

let counter = 1;
++counter
console.log(counter) // 2

let cnt = 1;
let c = cnt++
console.log(c) //1

let cnt2 = 1;
let d = ++cnt2
console.log(d) //2

//Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.
let a = (1 + 2, 3 + 4);
/**
 * a = (1+2) = 3
 * a = (3+4) = 7
 */
console.log( a ); // 7
console.log( null === undefined ); // false
console.log( null == undefined ); // true

5 > 4 // true
"apple" > "pineapple" //false
"2" > "12" //true - Again, dictionary comparison, first char of "2" is greater than the first char of "1".
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

let name = null || "Sai" || "Smoo" // Sai
let str = null && "Sai" && "Smoo" // null
let str2 = "Swee" && "Sai" && "Smoo" // Smoo
let str3 = "Swee" || "Sai" && "Smoo" //Swee
let str3 = "Swee" && "Sai" || "Smoo" //Sai
let str4 = "Swee" && "Sai" || "Smoo" // Sai

let x;
true || (x = 1);
console.log(x); // undefined, because (x = 1) not evaluated

let x;
false || (x = 1);
console.log(x); // 1

let x = 1;
(x > 0) && console.log( 'Greater than zero!' ); //Greater than zero!

console.log( !!"non-empty string" ); // true
console.log( !!null ); // false

alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) );
/**
 * The first OR || evaluates it’s left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
 */
alert( null || 2 && 3 || 4 );
//The precedence of AND && is higher than ||, so it executes first.
// The result of 2 && 3 = 3, so the expression becomes:
null || 3 || 4 //3

if(-1){alert("enters")} //enters
if (-1 || 0) alert( 'first' ); //first
if (-1 && 0) alert( 'second' ); //No
if (null || -1 && 1) alert( 'third' );
/**
 * -1 && 1 => 1
 * null || 1
 * 1
 */
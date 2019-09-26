let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    console.log(message);
}

console.log(userName); // John before the function call

showMessage();

console.log(userName);

//-------------------------------------------------------
/**
 * When the function is called, the given values are copied to local variables from and text. Then the function uses them.
* Hence it doesnot modify the actual variable unlike above case
 */
let from = "Ann";

function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    console.log(from + ': ' + text);
}
console.log(from); // Ann

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann
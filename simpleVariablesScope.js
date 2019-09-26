let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    console.log(message);
}

console.log(userName); // John before the function call

showMessage();

console.log(userName); // Bob, the value was modified by the function

//---------------------------------------------------------

let userName = 'John';

function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log(userName); // John, unchanged, the function did not access the outer variable

//---------------------------------------------------------
//Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:


function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    alert(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann
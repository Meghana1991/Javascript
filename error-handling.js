/**
 * The below code doesn't have errors hence it will not enter catch block
 */
try {
  console.log('Line 1')
  console.log('Line 2')
}


catch {
  console.log('Error captured')
}

//-------------------------------------------------------------------------------
/**
 * The below code is errorneous Hence it enters the catch block BUT DOESNOT STOP EXECUTION instead shows something more senseful
 */
try {
  console.log('Line 1')
  console.log('Line 2')
  lalala
}

catch {
  console.log('Error captured')
}

/**
 * try..catch only works for runtime errors
 * For try..catch to work, the code must be runnable. In other words, it should be valid JavaScript.
It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:
try {
  {{{{{{{{{{{{
} catch(e) {
  console.log("The engine can't understand this code, it's invalid");
}
 */

/**
 * The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code.
 * So, try..catch can only handle errors that occur in the valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.
 */

/**
 * try..catch works synchronously
 *
try {
 setTimeout(function() {
   noSuchVariable; // script will die here
 }, 1000);
} catch (e) {
 console.log( "won't work" );
}

BUT this works fine

setTimeout(function() {
  try {
    noSuchVariable; // try..catch handles the error!
  } catch {
    console.log( "error is caught here!" );
  }
}, 1000);
 */

//-------------------------------------------------------------------------------
/**
try {
  // ...
} catch(err) { // <-- the "error object", could use another word instead of err
  // ...
}*/

try {
  lalala; // error, variable is not defined!
  console.log('execution continues') // Doesn't come here after encoutering error
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}

/**
 * throw operator
 “Throw” operator
The throw operator generates an error.
throw <error object>

Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).
JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.
 */
let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  //If you want to customize your error then throw it here and catch will catc it
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  console.log(user.name);

} catch (e) {
  console.log("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
}

/**
 * In the line (*), the throw operator generates a SyntaxError with the given message, the same way as JavaScript would generate it itself. The execution of try immediately stops and the control flow jumps into catch.
 * Now catch became a single place for all error handling: both for JSON.parse and other cases.
 */
//-------------------------------------------------------------------------------
/**
 * try…catch…finally
Wait, that’s not all.

The try..catch construct may have one more code clause: finally.

If it exists, it runs in all cases:

after try, if there were no errors,
after catch, if there were errors.

Basically if the code fails or hits the finally would be called
The finally clause is often used when we start doing something and want to finalize it in any case of outcome.
 */

try {
  // ... try to execute the code ...
} catch (e) {
  // ...handle errors ...
} finally {
  // ...execute always ...
}

//Example
try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
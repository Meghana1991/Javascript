/**
 * What makes a module unique to other scripts?
 */
// 1- Always “use strict” - Modules always use strict, by default. E.g. assigning to an undeclared variable will give an error.
<script type="module">
    a = 5;
</script>

    // 2- Module-level scope - Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.

    // consider a normal scenario without module below - 
    <script type="module" src="user.js"></script>
    <script type="module" src="hello.js"></script>

// user.js
let user = "John";

// hello.js
alert(user); // no such variable (each module has independent variables)

// consider a scenario with module now
<script type="module" src="hello.js"></script>

// hello.js
import { user } from './user.js';

document.body.innerHTML = user; // John

// user.js
export let user = "John";

//  3 - In the browser, independent top-level scope also exists for each <script type="module">:

<script type="module">
    {/* The variable is only visible in this module script */}
    let user = "John";
</script>

    <script type="module">
        alert(user);  Error: user is not defined
</script>
// If we really need to make a window-level global variable, we can explicitly assign it to window and access as window.user. But that’s an exception requiring a good reason.

/**
 * SINGLETON - If this module is imported from multiple files, the module is only evaluated the first time, admin object is created, and then passed to all further importers.
 * All importers get exactly the one and only admin object:
 */

 // 📁 1.js
import { admin } from './admin.js';
admin.name = "Pete";

// 📁 2.js
import { admin } from './admin.js';
alert(admin.name); // Pete

// Both 1.js and 2.js imported the same object
// Changes made in 1.js are visible in 2.js
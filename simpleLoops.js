let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

//-----------------------------------------------------------------------------------------------
/**
for (begin; condition; step) {
  // ... loop body ...
}
1)Any part of for can be skipped.
2)
 */

let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
    console.log(i); // 0, 1, 2
}

let j = 0;

for (; j < 3;) {
    console.log(j++);
}

// for (; ;) {
//     // repeats without limits
// }

//----------------------------------------------------------------------------------------------
/**
 * Break and Continue
 */
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        console.log('Broken')
        break;
    }
    console.log(i)
}

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        console.log('Continue')
        continue;
    }
    console.log(i)
}

outerLoop: for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        /**
         * Here If i have to go outside the loops at once on some condition
         * then if i use break, it will just make me go outa current for loop
         * but not the outer loop. Hence use labelName
         */
        console.log(j)
        if (j == 2) {
            console.log('break multi')
            break outerLoop;
        }
    }
}
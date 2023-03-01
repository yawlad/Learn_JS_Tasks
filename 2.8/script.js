"use strict";

/*__TASK_01__*/

let a = 1, 
    b = 1;

let c = ++a; // a = 2, c = 2
let d = b++; // b = 2, d = 1

/*__TASK_02__*/

let a_ = 2;

let x_ = 1 + (a_ *= 2); // a_ = 4, x_ = 5

/*__TASK_03__*/

"" + 1 + 0          // "10" 
"" - 1 + 0          // -1
true + false        // 1
6 / "3"             // 2
"2" * "3"           // 6
4 + 5 + "px"        // "9px"
"$" + 4 + 5         // "$45"
"4" - 2             // 2
"4px" - 2           // NaN
"  -9  " + 5        // "  -9  5"
"  -9  " - 5        // -14
null + 1            // 1
undefined + 1       // NaN
" \t \n" - 2        // -2

/*__TASK_04__*/

let x = Number(prompt("Первое число?", 1)); // or let x = +prompt("Первое число?", 1)
let y = Number(prompt("Второе число?", 2)); // or let y = +prompt("Первое число?", 2)

alert(x + y); 
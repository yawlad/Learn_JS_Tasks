"use strict";

/*__TASK_01__*/

alert( null || 2 || undefined ); // 2

/*__TASK_02__*/

alert( alert(1) || 2 || alert(3) ); // 1   2

/*__TASK_03__*/

alert( 1 && null && 2 );  // null

/*__TASK_04__*/

alert( alert(1) && alert(2) );  // 1   undefined

/*__TASK_05__*/

alert( null || 2 && 3 || 4 ); //  3

/*__TASK_06__*/

if (age >= 14 && age <= 90);

/*__TASK_07__*/

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

/*__TASK_07__*/

if (-1 || 0) alert( "first" );          // first
if (-1 && 0) alert( "second" );         // -
if (null || -1 && 1) alert( "third" );  // third

/*__TASK_08__*/

let login = prompt("Who is there?");

if (login === "Admin") {
  password = prompt("Enter your password")
  if (password === "I'm main") {
    alert("Hello!");
  } else if (password === undefined || password === null) {
    alert("Canceled");
  } else {
    alert("Incorrect password");
  }

} else if (login === undefined || login === null) {
  alert("Canceled");
} else {
  alert("I dont know you");
}
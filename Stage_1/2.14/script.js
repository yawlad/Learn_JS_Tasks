"use strict"

/*___TASK_01___*/

if (browser === "Edge") {
  alert( "You've got the Edge!" );
} else if (browser === "Chrome" || browser === "Firefox" ||browser === "Safari" ||browser === "Opera") {
  alert( "Okay we support these browsers too" );
} else {
  alert( "We hope that this page looks ok!" );
}

/*___TASK_02___*/

const number = +prompt("Enter the number from 0 to 3", "");

switch(number) {
  case 0:
    alert("You enter 0");
    break;
  case 1:
    alert("You enter 1");
    break
  case 2:
  case 3:
    alert("You enter 2 or 3");
}



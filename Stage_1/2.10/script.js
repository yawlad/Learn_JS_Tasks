"use strict";

/*__TASK_01__*/

if ("0") {              // "0" - not empty
    alert( "Привет" );  // condition is true
  }                     // alert will work

/*__TASK_02__*/

name = prompt("Enter the right name of JS: ");

if (name === "ECMAScript") {
    alert("Right!");
} else {
    alert("Don't know? ECMAScript!");
}

/*__TASK_03__*/

let num = prompt("Enter your number: ", 0);

if (num > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}

/*__TASK_04__*/

let result = a + b < 4 ? "A little" : "A lot";

/*__TASK_05__*/

let message = login === "" ? "Нет логина": 
                login ==="Директор" ? "Здравствуйте" : 
                login === "Сотрудник" ? "Привет": 
                "";
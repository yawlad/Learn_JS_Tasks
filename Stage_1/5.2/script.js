"use strict";

/***___TASK_01___***/

alert(+prompt("Enter first num: ") + +prompt("Enter second num: "));

/***___TASK_02___***/

// It is due to the binary representation of those number
// To fix this problem, we need to bring our number closer to integer

alert((6.35 * 10).toFixed(0) / 10);

/***___TASK_03___***/

function readNumber() {
  let num;
  while (true) {
    num = prompt("Enter a number: ");
    if (num === null || num === "") return null;
    if (isFinite(num)) return num;
  }
}

/***___TASK_04___***/

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// This cycle is infinite
// Due to loss of precision when working with decimals

/***___TASK_05___***/

function random(min, max) {
  return min + Math.random() * (max - min);
}

/***___TASK_06___***/

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
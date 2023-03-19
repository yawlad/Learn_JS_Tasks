"use strict";

/***___TASK_01___***/

let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");

alert(fruits.length); // 4

// Because shoppingCart is a reference, not an new array.

/***___TASK_02___***/

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

/***___TASK_03___***/

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // arr[2] is function
// arr[2]() shows us the array (this in that code is a reference on array)

/***___TASK_04___***/

function sumInput() {
  let numbers = [];
  let result = 0;
  
  while (true) {
    let value = prompt("Enter number: ", "");
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }

  for (let number of numbers) {
    result += number;
  }

  return result;
}

/***___TASK_05___***/

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

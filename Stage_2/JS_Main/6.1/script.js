"use strict";

/***___TASK_01___***/

function sumToCycle(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1); // The slowest, because of lots of function calls
}

function sumToFormule(n) {
  return (n * (n + 1)) / 2; // The fastest, because of only 3 operations (+, *, /)
}
/***___TASK_02___***/

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

/***___TASK_03___***/

function fib(n) {
  let current = 0;
  let next = 1;
  while(true){
    if (n==0){
      return current;
    }
    let temp = next;
    next = current + next;
    current = temp;
    n--;
  }
}

/***___TASK_04___***/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListCycle(list) {
  let current = list;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function printListRecursion(list) {
  console.log(list.value)
  if (list.next) printListRecursion(list.next); 
  
}

/***___TASK_05___***/

function reversePrintListCycle(list) {
  let current = list;
  let list_of_values = []
  while (current) {
    list_of_values.push(current.value)
    current = current.next;
  }
  for (let i = list_of_values.length - 1; i >= 0; i--) {
    console.log(list_of_values[i]);
  }
}

function reversePrintListRecursion(list) {
  if (list.next) reversePrintListRecursion(list.next); 
  console.log(list.value);
}

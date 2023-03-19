"use strict"

/*___TASK_01___*/

// They work the same way

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Родители разрешили?');
}


/*___TASK_02___*/

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

/*___TASK_03___*/

function min(a, b) {
  return a < b ? a : b;
}

/*___TASK_04___*/

function pow(a, p) {
  if(p <= 0) {
    alert("Incorrect power: must be natural number");
    return;
  }
  let result = 1
  while(p > 0) {
    result *= a;
    p--;
  }
  return result;
}
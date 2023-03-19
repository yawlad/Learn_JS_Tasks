"use strict";

/***___TASK_01___***/

let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

/***___TASK_02___***/

function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

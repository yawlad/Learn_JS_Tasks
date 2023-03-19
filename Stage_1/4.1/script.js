"use strict";

/***___TASK_01___***/

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/***___TASK_02___***/

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

/***___TASK_03___***/

const user_ = {
  name: "John",
};

// Will it work?
user_.name = "Pete"; // Yes, constant is only user variable

/***___TASK_04___***/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function get_summ(salaries_dict) {
  let result = 0;
  for (let key in salaries_dict) {
    result += salaries_dict[key];
  }
  return result;
}

/***___TASK_05___***/

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for(let key in obj) {
    if(typeof(obj[key]) === 'number') {
      obj[key]*=2;
    }
  }
}

multiplyNumeric(menu);

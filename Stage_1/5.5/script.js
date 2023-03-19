"use strict";

/***___TASK_01___***/

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

/***___TASK_02___***/

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

/***___TASK_03___***/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

/***___TASK_04___***/

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

/***___TASK_05___***/

function copySorted(arr) {
  return arr.slice(0).sort();
}

let arr_1 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr_1);

alert(sorted);
alert(arr_1);

/***___TASK_06___***/

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let splitted_str = str.split(" ");
    let a = +splitted_str[0];
    let op = splitted_str[1];
    let b = +splitted_str[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

/***___TASK_07___***/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

// let names = [];
// users.forEach((user)=>{
//   names.push(user.name)
// })

let names = users.map((item) => item.name);

/***___TASK_08___***/

let vasya_1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya_1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha_1 = { name: "Маша", surname: "Петрова", id: 3 };

let users_1 = [vasya_1, petya_1, masha_1];

// let usersMapped = [];
// users_1.forEach((user)=>{
//   usersMapped.push({
//     ullName: `${user.name} ${user.surname}`,
//     id: user.id
//   })
// });

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/***___TASK_09___***/

function sortByAge(users) {
  users.sort((prev, curr) => (prev.age > curr.age ? 1 : -1));
}

let vasya_2 = { name: "Вася", age: 25 };
let petya_2 = { name: "Петя", age: 30 };
let masha_2 = { name: "Маша", age: 28 };

let arr_2 = [vasya_2, petya_2, masha_2];
sortByAge(arr_2);

/***___TASK_10___***/

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let lst = [1, 2, 3, 4, 5, 6];

/***___TASK_11___***/

function getAverageAge(users) {
  return (
    users.reduce((prev, curr_user) => prev + curr_user.age, 0) / users.length
  );
}

let vasya_3 = { name: "Вася", age: 25 };
let petya_3 = { name: "Петя", age: 30 };
let masha_3 = { name: "Маша", age: 29 };

let arr_3 = [vasya_3, petya_3, masha_3];

/***___TASK_12___***/

function unique(arr) {
  let result = [];

  arr.forEach(item => {
    if(!result.includes(item)){
      result.push(item);
    }
  });

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
 
/***___TASK_13___***/

function groupById(arr) {
  let result = {};
  arr.forEach(item => {
    result[item["id"]] = item;
  })
  return result;
}

let users_2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users_2);
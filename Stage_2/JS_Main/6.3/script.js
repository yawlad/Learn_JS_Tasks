"use strict";

/***___TASK_01___***/

{
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter(); // They are completely independent variables because they are in different
  let counter2 = makeCounter(); // lexical environments (they are local variables in their environments)

  alert(counter()); // 0
  alert(counter()); // 1

  alert(counter2()); // 0
  alert(counter2()); // 1
}

/***___TASK_02___***/

{
  function Counter() {
    let count = 0;

    this.up = function () {
      return ++count;
    };
    this.down = function () {
      return --count;
    };
  }

  let counter = new Counter();

  alert(counter.up()); // 1
  alert(counter.up()); // 2
  alert(counter.down()); // 1
}

/***___TASK_03___***/

{
  let phrase = "Hello";

  if (true) {
    let user = "John";

    function sayHi() {
      alert(`${phrase}, ${user}`);
    }
  }

  try {
    sayHi(); // Error, because sayHi is a local function in if-block
  } catch (error) {
    alert(error);
  }
}

/***___TASK_04___***/

{
  function sum(a) {
    return (b) => a + b;
  }

  alert(sum(1)(2));
  alert(sum(5)(-1));
}

/***___TASK_05___***/

{
  function inBetween(a, b) {
    return function (item) {
      return item >= a && item <= b;
    };
  }

  function inArray(arr) {
    return function (item) {
      return arr.includes(item);
    };
  }

  let arr = [1, 2, 3, 4, 5, 6, 7];

  alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
  alert(arr.filter(inArray([1, 2, 10]))); // 1,2
}

/***___TASK_06___***/

{
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  function byField(field) {
    return function (cur, nxt) {
      return cur[field] > nxt[field] ? 1 : -1;
    };
  }

  users.sort(byField("name"));
  users.forEach((user) => alert(`${user.name}: ${user.age}`));

  users.sort(byField("age"));
  users.forEach((user) => alert(`${user.name}: ${user.age}`));
}

/***___TASK_07___***/

{
  function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let k = i;
      let shooter = function () {
        alert(k);
      };
      shooters.push(shooter);
      i++;
    }

    return shooters;
  }

  let army = makeArmy();
  army[0]();
  army[5]();
}

"use strict";

/***___TASK_01___***/

function makeUser() {
  return {
    name: "John",
    ref: this, // this is a reference to function makeUser()
  };
}

let user = makeUser();

alert(user.ref.name); // What is the result?

// Will be error

/***___TASK_02___***/

let calculator = {
  read: () => {
    this.a = +prompt("Enter a: ");
    this.b = +prompt("Enter b: ");
  },

  sum: () => this.a + this.b,
  mul: () => this.a * this.b,
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/***___TASK_03___***/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

"use strict";

/***___TASK_01___***/

let x = { a: 5 };

function A() {
  return x;
}
function B() {
  return x;
}

alert(new A() == new B());

/***___TASK_02___***/

function Calculator() {
  (this.read = () => {
    this.a = +prompt("Enter a: ");
    this.b = +prompt("Enter b: ");
  }),
    (this.sum = () => this.a + this.b),
    (this.mul = () => this.a * this.b);
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

/***___TASK_03___***/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => (this.value += +prompt("Add the value: ", 0));
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

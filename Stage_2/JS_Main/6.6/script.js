"use strict";

/***___TASK_01___***/

{
  function makeCounter() {
    let count = 0;

    function counter() {
      return count++;
    }

    counter.set = (value) => (count = value);

    counter.decrease = () => count--;

    return counter;
  }
  let c1 = makeCounter();
  c1.set(12);
  c1.decrease();
  alert(c1());
  alert(c1());
}

/***___TASK_02___***/

{
  function sum(a) {
    let currentSum = a;

    next_step.toString = () => currentSum;

    function next_step(b) {
      currentSum += b;
      return next_step;
    }

    return next_step;
  }
  alert(sum(1)(2));
  alert(sum(0)(1)(2)(3)(4)(5));
}

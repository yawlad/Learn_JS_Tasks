"use strict";

/***___TASK_01___***/

{
  function printNumbersInterval(from, to) {
    let current = from;

    let timerId = setInterval(function () {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }

  function printNumbersTimeout(from, to) {
    let current = from;

    setTimeout(function next() {
      alert(current);
      if (current < to) {
        setTimeout(next, 1000);
      }
      current++;
    }, 1000);
  }
}

/***___TASK_02___***/

{
  let i = 0;

  setTimeout(() => alert(i), 100); // 100000000

  for (let j = 0; j < 100000000; j++) {
    i++;
  }

  // All timeouts are triggered after the execution of the main code
}

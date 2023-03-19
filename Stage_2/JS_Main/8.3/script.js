"use strict";

/***___TASK_01___***/

{
  function f() {
    alert("Hello!");
  }

  Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
  };

  f.defer(1000);
}

/***___TASK_02___***/

{
  function f(a, b) {
    alert(a + b);
  }

  Function.prototype.defer = function(ms) {
    let func = this;
    return function(...args) {
        setTimeout(func, ms, ...args);
    }
  }

  f.defer(1000)(1, 2);
}

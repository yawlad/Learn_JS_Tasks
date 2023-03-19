"use strict";

/***___TASK_01___***/

function work(a, b) {
  alert(a + b);
  return a + b;
}

function spy(func) {
  wrapper.calls = [];
  function wrapper() {
    wrapper.calls.push([...arguments]);
    func.apply(this, arguments);
  }
  return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  alert("call:" + args.join()); // "call:1,2", "call:4,5"
}

/***___TASK_02___***/

{
  function f(x) {
    alert(x);
  }

  function delay(f, ms) {
    return function wrapper() {
      setTimeout(() => f.apply(this, [...arguments]), ms);
    };
  }

  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);

  f1000("test1000", 1);
  f1500("test1500", 2);
}

/***___TASK_03___***/

{
  function debounce(f, ms) {
    let cooldown = false;

    return function () {
      if (cooldown) return;

      f.apply(this, [...arguments]);
      cooldown = true;
      setTimeout(() => (cooldown = false), ms);
    };
  }

  let f = debounce(alert, 1000);

  f(1);
  f(2);

  setTimeout(() => f(3), 100);
  setTimeout(() => f(4), 1100);
  setTimeout(() => f(5), 1500);
}

/***___TASK_04___***/

{
  function throttle(f, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      f.apply(this, arguments);

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }

  function f(a) {
    console.log(a);
  }

  let f1000 = throttle(f, 1000);

  f1000(1);
  f1000(2); 
  f1000(3); 
}

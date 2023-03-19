"use strict";

/***___TASK_01___***/

{
  function f() {
    alert(this);
  }

  let user = {
    g: f.bind(null),
  };

  user.g(); // null, because we hardcoded the context
}

/***___TASK_02___***/

{
  function f() {
    alert(this.name);
  }

  f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

  f(); // Вася
}

/***___TASK_03___***/

{
  function sayHi() {
    alert(this.name);
  }
  sayHi.test = 5;

  let bound = sayHi.bind({
    name: "Вася",
  });

  alert(bound.test); // undefiend, because bound is new object, it does't have test
}

/***___TASK_04___***/

{
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "Вася",

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };

  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
}

/***___TASK_05___***/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user, true), user.login.bind(user, false));
"use strict";

/***___TASK_01___***/

{
  let animal = {
    jumps: null,
  };
  let rabbit = {
    __proto__: animal,
    jumps: true,
  };

  alert(rabbit.jumps); // true

  delete rabbit.jumps;

  alert(rabbit.jumps); // null

  delete animal.jumps;

  alert(rabbit.jumps); // undefined
}

/***___TASK_02___***/

{
  let head = {
    glasses: 1,
  };

  let table = {
    pen: 3,
    __proto__: head,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };

  let pockets = {
    money: 2000,
    __proto__: bed,
  };
}

/***___TASK_03___***/

{
  let animal = {
    eat() {
      this.full = true;
    },
  };

  let rabbit = {
    __proto__: animal,
  };

  rabbit.eat(); // rabbit will get full = true, because of this-word
}

/***___TASK_04___***/

{
  let hamster = {
    eat(food) {
      this.stomach.push(food);
    },
  };

  let speedy = {
    stomach: [],
    __proto__: hamster,
  };

  let lazy = {
    stomach: [],
    __proto__: hamster,
  };
  
  speedy.eat("apple");
  alert(speedy.stomach);
  alert(lazy.stomach);
}

"use strict";

/***___TASK_01___***/

{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  // Rabbit.prototype = {};
  // alert(rabbit.eats);   // true

  // Rabbit.prototype.eats = false;
  // alert(rabbit.eats); // false

  //   delete rabbit.eats;
  //   alert(rabbit.eats); // true

  //   delete Rabbit.prototype.eats;
  //   alert(rabbit.eats);  // undefined
}

/***___TASK_02___***/

{
  function Obj(value) {
    this.value = value;
  }

  let obj = new Obj(10);
  let obj2 = new obj.constructor(20);
  alert(obj.value);
  alert(obj2.value);
}

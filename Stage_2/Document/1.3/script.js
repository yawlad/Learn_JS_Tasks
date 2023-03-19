"use strict";

/***___TASK_01___***/

{
  document.body.firstElementChild;

  document.body.children[1];
  
  document.body.children[1].lastElementChild;
}

/***___TASK_02___***/

{
  // It's true, because the last element doesn't have a link on next sibling. This
  // It's false, because there may be nodes of a different type before it.
}

/***___TASK_03___***/

{
  let table = document.body.children[2];

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
}

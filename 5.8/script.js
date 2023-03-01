"use strict";

/***___TASK_01___***/

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// We can use WeakSet to store read messages
// Alsso we can add a Sybol("wasRead") as flag to our object

/***___TASK_02___***/

let messages_2 = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// There we can use WeakMap
// let readMap = new WeakMap();
// readMap.set(messages[n], [DATE]);
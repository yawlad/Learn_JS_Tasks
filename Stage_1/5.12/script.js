"use strict";

/***___TASK_01___***/

let user = {
  name: "Василий Иванович",
  age: 35,
};

let user_copy = JSON.parse(JSON.stringify(user));

/***___TASK_02___***/

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);

"use strict";

/***___TASK_01___***/

let my_date = new Date(2012, 1, 20, 3, 12);

/***___TASK_02___***/

function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}

let date_2 = new Date(2014, 0, 3);
alert(getWeekDay(date_2));

/***___TASK_03___***/

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

let date_3 = new Date(2012, 0, 3);
alert(getLocalDay(date_3));

/***___TASK_04___***/

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));

/***___TASK_05___***/

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));

/***___TASK_06___***/

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert(getSecondsToday());

/***___TASK_07___***/

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let delta = tomorrow - now;
  return Math.round(delta / 1000);
}

alert(getSecondsToTomorrow());

/***___TASK_08___***/

function formatDate(date) {
  let delta = new Date() - date;

  if (delta < 1000) {
    return "прямо сейчас";
  }

  let seconds = Math.floor(delta / 1000);

  if (seconds < 60) {
    return seconds + " сек. назад";
  }

  let minutes = Math.floor(delta / 60000);
  if (minutes < 60) {
    return minutes + " мин. назад";
  }

  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2));

  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

alert(formatDate(new Date(new Date() - 1)));
alert(formatDate(new Date(new Date() - 30 * 1000)));
alert(formatDate(new Date(new Date() - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date() - 86400 * 1000)));

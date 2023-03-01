"use strict";

/***___TASK_01___***/

function ucFirst(str) {
  if (!str) return str;
  let result = "";
  result += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    result += str[i].toLowerCase();
  }
  return result;
}

/***___TASK_02___***/

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.toLowerCase().includes("viagra") || lowerStr.includes("xxx");
}

/***___TASK_03___***/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + '...';
  }
  return str
}

/***___TASK_04___***/

function extractCurrencyValue(str) {
  return +str.slice(1);
}


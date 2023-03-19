"use strict";


function pow(x, n) {
  let result = x;
  while(n > 1) {
    result*=x;
    n--;
  }
  return result;
}



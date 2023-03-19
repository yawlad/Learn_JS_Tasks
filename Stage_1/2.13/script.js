"use strict"

/*___TASK_01___*/

let i = 3;

while (i) {
  alert( i-- ); // Last number: 1
}

/*___TASK_02___*/

i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5

/*___TASK_03___*/

for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

/*___TASK_04___*/

for (let i = 2; i <= 10; i+=2) alert(i);  

/*___TASK_05___*/

i = 0;
while(i < 3) {
  alert( `number ${i}!` );
  i++;
}

/*___TASK_06___*/

let number = 0
while (number < 100) {
  number = prompt("Enter the correct number: ");
}

/*___TASK_07___*/

number: for (let i = 2; i <= 10; i++) {
  for (let j = 2; j <= i/2; j++) {
    if (i % j === 0) {
      continue number;
    }
  }
  alert(i);
}
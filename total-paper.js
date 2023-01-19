// create function to return total paperwork if it n&m < 0 return 0
"use strict" //sloopy mode
let n = prompt("enter a number");
let m = prompt("enter a number");
// Function Declarition
function calcPaper(n, m) {
  return n > 0 && m > 0
    ? console.log(
        ` The classmates = ${n} , The paperWork = ${m} , Result : ${n * m}`
      )
    : console.log("return 0");
}
calcPaper(n, m); //call function

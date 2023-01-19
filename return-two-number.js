// create function to check two number is divisable 3 or false
"use strict" //sloopy mode
const Division = function (n, num1, num2) {
  // Function Expression => anonymous Function
  return n % num1 == 0 && n % num2 == 0
    ? console.log(`true because ${n} is divisible by ${num1} and ${num2}`)
    : console.log("false");
};
Division(12, 3, 4);

// creat function to return time scince midnight in millisecound
"use strict";
// h = Hours , m = Mintues , s = Secound
// Function Expreisson
let clock = (h, m, s) => {
  //arrow Function
  // 60 to convert from hours to minutes
  let convertHours = h * 60 * 60 * 1000;
  // 60 to convert from minutes to secounds
  let convertMinutes = m * 60 * 1000;
  // 1000 to convert from secound to milisecound
  let convertSecound = s * 1000;
  return console.log(convertHours + convertMinutes + convertSecound);
};
clock(0, 1, 1);

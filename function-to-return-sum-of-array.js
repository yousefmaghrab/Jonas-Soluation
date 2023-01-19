// create function to return sum
"use strict" //sloopy mode
var array = [1, 2, 2, 4, 5];
// Function Expression => anonymous Function
const sumNumbers = () => {
  // dynamic variables
  let newArr = [];
  // newarray to push power of numbers
  let sum = 0;
  // sum to return sumition of numbers
  for (let i = 0; i < array.length; i++) {
    let add = array[i] ** 2;
    //add to number power of 2
    newArr.push(add);
    // now newarray contain the power of numbers
  }
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  console.log(sum);
};
sumNumbers();

// static variables
var array = [1, 2, 2];
// Function Expression => anonymous Function
let sum = () => array[0] ** 2 + array[1] ** 2 + array[2] ** 2;
console.log(sum());
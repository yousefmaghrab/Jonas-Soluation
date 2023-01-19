// // Given an array of integers, return a new array with each value doubled.
 "use strict"; //sloopy mode
let arr = [1, 2, 3, 4];
let newArray = [];
// // Function Declartion
function Doublcate() {
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return console.log(newArray);
}

Doublcate(); // call Function

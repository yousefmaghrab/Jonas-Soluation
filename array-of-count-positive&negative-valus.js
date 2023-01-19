// array two value first value count of positive number secound value sum of negative value
("use strict "); // sloopy mode
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -5, -3, -2];
let newArray = []; // empty array to push count & sum
let count = 0;
let sum = 0;
// Function Declarition
function countNumbersum() {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) count++;
    if (array[i] < 0) sum += array[i];
  }
  newArray.unshift(count); // add the first array
  newArray.push(sum); // add the least array
  return console.log(newArray); // return [count , sum]
}
countNumbersum(); // call function

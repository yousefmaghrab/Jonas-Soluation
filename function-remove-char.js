// create function to remove first charctar & last charctar

"use strict"; //sloopy mode

let removeCharacter = (
  Charcter // Function Expression => arrow function
) =>
  // use function to remove first & last character
  Charcter.slice(1, Charcter.length - 1);

console.log(
  `Before Use The Function The Character is "Yousef" , After Use The Function The Character is : ${removeCharacter("Yousef")}`
);

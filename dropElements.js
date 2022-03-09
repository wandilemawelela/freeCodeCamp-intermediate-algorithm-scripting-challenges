/*
Prompt
======
Given the array arr, iterate through and remove each element starting from the first element 
(the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned 
as an empty array.


Solution
========

*/

function dropElements(arr, func) {
  let myLength = arr.length;
  for (let i = 0; i < myLength; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

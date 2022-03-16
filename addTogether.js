/*
Prompt
======
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:
If either argument isn't a valid number, return undefined.

Solution
========

*/

function addTogether() {
  let [arg1, arg2] = arguments;

  function isNum(num) {
    return Number.isInteger(num);
  }

  if (!isNum(arg1)) {
    return undefined;
  } else if (isNum(arg1) && isNum(arg2)) {
    return arg1 + arg2;
  } else if (!arg2) {
    return function (newArg) {
      if (isNum(newArg)) {
        return arg1 + newArg;
      }
    };
  }
}

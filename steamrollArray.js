/*
Prompt
======
Flatten a nested array. You must account for varying levels of nesting.

Solution
========

*/

function steamrollArray(arr) {
  const flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened.push(...steamrollArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);

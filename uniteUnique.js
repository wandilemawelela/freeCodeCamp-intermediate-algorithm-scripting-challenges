/*
Prompt
======
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.




Solution
========
*/

function uniteUnique(arr) {
    let arr2 = [];
    let newArr = [];

    for (let i = 0; i < arguments.length; i++) {
        arr2 = arr2.concat(arguments[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        if (newArr.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
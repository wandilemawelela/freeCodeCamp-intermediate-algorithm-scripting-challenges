/*
Prompt
======
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.

Solution
========
*/

function diffArray(arr1, arr2) {
    let firstFilter = arr1.filter((firstFilter) => !arr2.includes(firstFilter));
    let secondFilter = arr2.filter(
        (secondFilter) => !arr1.includes(secondFilter)
    );

    const newArr = firstFilter.concat(secondFilter);
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
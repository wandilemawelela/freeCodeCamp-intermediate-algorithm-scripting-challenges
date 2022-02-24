/*
Prompt
======

You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the 
same value as these arguments.
Note: You have to use the arguments object.

Solution
========

*/

function destroyer(arr) {
    var removeArgs = Array.prototype.slice.call(arguments, 1);

    function destroy(abc) {
        return removeArgs.indexOf(abc) === -1;
    }
    return arr.filter(destroy);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
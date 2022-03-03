/*
Prompt
======
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Solution
========
*/

function fearNotLetter(str) {
    var start = str.charCodeAt(0) + 1;
    var missingLetters = '';

    for (var i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) !== start) {
            missingLetters += String.fromCharCode(start);
            start++;
        }
        start++;
    }

    if (missingLetters == '') {
        missingLetters = undefined;
    }

    return missingLetters;
}

fearNotLetter("abce");
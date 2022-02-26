/*
Prompt
======
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Solution
========
*/

function spinalCase(str) {
    let spinalText = str
        .replace(/(?!^)([A-Z])/g, " $1")
        .replace(/[_\s]+(?=[a-zA-Z])/g, "-")
        .toLowerCase();
    return spinalText;
}

spinalCase("This Is Spinal Tap");
/*
Prompt
======
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


Solution
========
*/

function convertHTML(str) {

    let regex = /[&|<|>|"|']/g;
    let string = str.replace(regex, function(match) {
        if (match === "&") {
            return "&amp;";
        } else if (match === "<") {
            return "&lt;"
        } else if (match === ">") {
            return "&gt;";
        } else if (match === '"') {
            return "&quot;";
        } else {
            return "&apos;";
        }
    });
    return string;
}

convertHTML("Dolce & Gabbana");
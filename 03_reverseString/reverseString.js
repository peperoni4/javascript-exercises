const reverseString = function(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; --i) {
        reversed += str[i];
    }
    return reversed;
};

function reverseString2(str) {
    return str.split("").reverse().join("");
}

// Do not edit below this line
module.exports = reverseString;

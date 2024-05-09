const removeFromArray2 = function(arr, ...args) {
    return arr.filter((item) => !args.includes(item));
};

const removeFromArray3 = function(arr, ...args) {
    for (const arg of args) {
        for (let i = 0; i < arr.length; ++i) {
            if (arg === arr[i]) arr.splice(i--, 1);
        }
    }


    return arr;
}

const removeFromArray = function() {
    const arr = arguments[0];
    for (let i = 1; i < arguments.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            if (arguments[i] === arr[j]) arr.splice(j--, 1);
        }
    }
    return arr;
}
// Do not edit below this line
module.exports = removeFromArray;

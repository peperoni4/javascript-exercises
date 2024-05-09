const sumAll2 = function(begin, end) {
    if (
      typeof begin !== 'number' || 
      typeof end !== 'number'   ||
      begin < 0                 || 
      end < 0
    ) 
        return "ERROR";

    if (begin > end) {
        const tmp = begin;
        begin = end;
        end = tmp;
    }

    let sum = 0;
    for (let i = begin; i <= end; ++i) {
        sum += i;
    }
    return sum;
};

// Alternative version
const sumAll = function(begin, end) {
    if (!Number.isInteger(begin) || !Number.isInteger(end)) return "ERROR";
    if (begin < 0 || end < 0) return "ERROR";

    if (begin > end) [begin, end] = [end, begin];

    let sum = 0;
    for (let i = begin; i <= end; ++i) {
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;

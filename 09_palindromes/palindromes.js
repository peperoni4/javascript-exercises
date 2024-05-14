const palindromes = function (str) {
  const filtered = str.toLowerCase().replace(/[^\w\s\']|_| /g, "");

  for (let i = 0, j = filtered.length - 1; i < j; ++i, --j) {
    if (filtered[i] != filtered[j]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

const convertToCelsius = function(fahrenheitTemp) {
  return Math.round(5 * (fahrenheitTemp - 32) / 9 * 10) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {
  return Math.round((celsiusTemp * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

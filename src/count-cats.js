const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr ? arr.length ? arr.flat().reduce((sum, cur) =>   cur == "^^" ? sum + 1: sum , 0): 0: 0;
};

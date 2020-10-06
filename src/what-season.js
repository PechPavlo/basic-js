const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date) {
    if (Object.prototype.toString.call(date) === "[object Date]") {
      let month = date.getMonth();
      return month < 2 ? "winter" : month < 5 ? "spring" : month < 8 ? "summer" : month < 11 ? "autumn" : "winter";
    } else {
      throw new Error('Error')
    }
  } else {
    return "Unable to determine the time of year!"
  };
};

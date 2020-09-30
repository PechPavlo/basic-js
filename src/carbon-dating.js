const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {

 return  typeof(sampleActivity) == "string" && !!+sampleActivity && 0 < +sampleActivity && +sampleActivity <= 15 ? Math.ceil( Math.log(15 / +sampleActivity) * 5730 / 0.693): false;
};

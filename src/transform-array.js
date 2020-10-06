const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let dsp = '--discard-prev';
  let dbp = '--double-prev';
  let dbn = '--double-next';
  let dsn = '--discard-next';
  if (Array.isArray(arr)) {
    if (arr.length) {
      return arr.reduce((acc, cur, idx, src) => {
        (idx === 0 && (cur === dsp || cur === dbp)) || (idx === src.length - 1 && (cur === dbn || cur === dsn)) ? null :
          cur === dsp ?
            src[idx - 2] === dsn ? null :
              acc.pop() :
            cur === dbp ? src[idx - 2] === dsn ? null :
              acc.push(src[idx - 1]) :
              cur === dbn ? acc.push(src[idx + 1]) :
                cur === dsn ? null :
                  src[idx - 1] === dsn ? null :
                    acc.push(cur);
        return acc
      }, [])
    } else {
      return arr
    }
    // console.log(arr)
  } else {
    throw new Error('Error');
  }
  // remove line with error and write your code here

};

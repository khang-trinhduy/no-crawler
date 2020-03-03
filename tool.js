const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "input-2"),
  { encoding: "utf8" },
  (error, data) => {
    if (error) {
      throw Error(error);
    } else {
      let lines = data.trim().split("\n");
      lines.forEach(line => {
        parseLine(line, (error, result) => {
          if (error) {
            throw new Error(error);
          } else {
            console.log(result);
          }
        });
      });
    }
  }
);

parseLine = (str, callback) => {
  var vals = str.split("|");
  try {
    let result =
      '{name:"' +
      vals[0] +
      '", code: "' +
      vals[0] +
      '", normalized: "' +
      vals[0].toLowerCase() +
      '",type: 1,interestRates: [';
    result +=
      '{ value:"' +
      vals[1] +
      '",period: 0, loc: "HCM",threshold: "' +
      vals[2] +
      '"}';
    result +=
      ',{ value:"' +
      vals[3] +
      '",period: 1, loc: "HCM",threshold: "' +
      vals[4] +
      '"}';
    result +=
      ',{ value:"' +
      vals[5] +
      '",period: 2, loc: "HCM",threshold: "' +
      vals[6] +
      '"}';
    result +=
      ',{ value:"' +
      vals[7] +
      '",period: 3, loc: "HCM",threshold: "' +
      vals[8] +
      '"}';
    result +=
      ',{ value:"' +
      vals[9] +
      '",period: 6, loc: "HCM",threshold: "' +
      vals[10] +
      '"}';
    result +=
      ',{ value:"' +
      vals[11] +
      '",period: 9, loc: "HCM",threshold: "' +
      vals[12] +
      '"}';
    result +=
      ',{ value:"' +
      vals[13] +
      '",period: 12, loc: "HCM",threshold: "' +
      vals[14] +
      '"}';
    result +=
      ',{ value:"' +
      vals[15] +
      '",period: 13, loc: "HCM",threshold: "' +
      vals[16] +
      '"}';
    result +=
      ',{ value:"' +
      vals[17] +
      '",period: 18, loc: "HCM",threshold: "' +
      vals[18] +
      '"}';
    result +=
      ',{ value:"' +
      vals[19] +
      '",period: 24, loc: "HCM",threshold: "' +
      vals[20] +
      '"}';
    result +=
      ',{ value:"' +
      vals[21] +
      '",period: 36, loc: "HCM",threshold: "' +
      vals[22] +
      '"}]},';

    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

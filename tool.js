const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "input"),
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
      '",type: 1,interestRates: {';
    result +=
      'unlimit: { value:"' +
      vals[1] +
      '",period: 0, loc: "HCM",threshold: "' +
      vals[2] +
      '"}';
    result +=
      ',oneM: { value:"' +
      vals[3] +
      '",period: 1, loc: "HCM",threshold: "' +
      vals[4] +
      '"}';
    result +=
      ',twoM: { value:"' +
      vals[5] +
      '",period: 2, loc: "HCM",threshold: "' +
      vals[6] +
      '"}';
    result +=
      ',threeM: { value:"' +
      vals[7] +
      '",period: 3, loc: "HCM",threshold: "' +
      vals[8] +
      '"}';
    result +=
      ',sixM: { value:"' +
      vals[9] +
      '",period: 6, loc: "HCM",threshold: "' +
      vals[10] +
      '"}';
    result +=
      ',nineM: { value:"' +
      vals[11] +
      '",period: 9, loc: "HCM",threshold: "' +
      vals[12] +
      '"}';
    result +=
      ',twelveM: { value:"' +
      vals[13] +
      '",period: 12, loc: "HCM",threshold: "' +
      vals[14] +
      '"}';
    result +=
      ',thirteenM: { value:"' +
      vals[15] +
      '",period: 13, loc: "HCM",threshold: "' +
      vals[16] +
      '"}';
    result +=
      ',eighteenM: { value:"' +
      vals[17] +
      '",period: 18, loc: "HCM",threshold: "' +
      vals[18] +
      '"}';
    result +=
      ',twentyFourM: { value:"' +
      vals[19] +
      '",period: 24, loc: "HCM",threshold: "' +
      vals[20] +
      '"}';
    result +=
      ',thirtySixM: { value:"' +
      vals[21] +
      '",period: 36, loc: "HCM",threshold: "' +
      vals[22] +
      '"}}},';

    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "input-3"),
  { encoding: "utf8" },
  (error, data) => {
    if (error) {
      throw Error(error);
    } else {
      let lines = data.trim().split("\n");
      lines.forEach(line => {
        parse(line, (error, result) => {
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

// 1 2: 0
// 3 4: 1
// 5 6: 2
// 7 8: 3
// 9 10: 6
// 11 12: 9
// 13 14: 12
// 15 16: 13
// 17 18: 18
// 19 20: 24
// 21 22: 36

parse = (str, callback) => {
  if (!str) {
    callback({ error: "invalid input" });
  } else {
    var vals = str.split("|");
    let bank = vals[0].toLowerCase();
    let result = "";
    if (vals[1] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[1]}, threshold: "${vals[2]}", period: 0},`;
    }
    if (vals[3] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[3]}, threshold: "${vals[4]}", period: 1},`;
    }
    if (vals[5] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[5]}, threshold: "${vals[6]}", period: 2},`;
    }
    if (vals[7] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[7]}, threshold: "${vals[8]}", period: 3},`;
    }
    if (vals[9] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[9]}, threshold: "${vals[10]}", period: 6},`;
    }
    if (vals[11] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[11]}, threshold: "${vals[12]}", period: 9},`;
    }
    if (vals[13] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[13]}, threshold: "${vals[14]}", period: 12},`;
    }
    if (vals[15] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[15]}, threshold: "${vals[16]}", period: 13},`;
    }
    if (vals[17] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[17]}, threshold: "${vals[18]}", period: 18},`;
    }
    if (vals[19] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[19]}, threshold: "${vals[20]}", period: 24},`;
    }
    if (vals[21] != "") {
      result += `{bank: "${vals[0]}", value: ${vals[21]}, threshold: "${vals[22]}", period: 36},`;
    }
    callback(null, result);
  }
};

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

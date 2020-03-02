var google = require("google-it");

exports.query = getData = (query, callback) => {
  google({
    query: query,
    onlyUrls: true
  })
    .then(result => {
      callback(result);
    })
    .catch(e => {
      callback({ error: "No internet connection" });
    });
};

var google = require("google-it");
var Crawler = require("crawler");
var path = require("path");
const fs = require("fs");

exports.query = getQueryResults = (query, callback) => {
  google({
    query: query,
    onlyUrls: true
  })
    .then(result => {
      crawl(result, (error, res) => {
        if (error) {
          console.error(error);
        } else {
          writeToFile(
            "stores/corpus/" + toFormal(res("title").text()),
            res("body").text()
          );
        }
      });
      callback(result);
    })
    .catch(e => {
      callback({ error: "No internet connection" });
    });
};

toFormal = str => {
  str = str.trim().toLowerCase();
  forbidCharacters.forEach(c => {
    str = str.split(c).join(" ");
  });
  return str + ".txt";
};

forbidCharacters = ["<", ">", ":", '"', "/", "\\", "|", "?", "*"];

writeToFile = (filepath, data, options, callback) => {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  const opts = { encoding: "utf8", ...options };
  const destpath = opts.increment ? incrementName(filepath, options) : filepath;
  const result = { path: destpath, data };

  if (opts.overwrite === false && exist(filepath, destpath)) {
    throw new Error("File aldready exists: " + destpath);
  }

  const promise = mkdir(path.dirname(destpath), {
    recursive: true,
    ...options
  }).then(() => {
    return new Promise((resolve, reject) => {
      fs.createWriteStream(destpath, opts)
        .on("error", err => reject(err))
        .on("close", resolve)
        .end(ensureNewline(data, opts));
    });
  });

  if (typeof callback === "function") {
    promise.then(() => callback(null, result)).catch(callback);
    return;
  }

  return promise.then(() => result);
};

const exist = (filepath, destpath) => {
  return filepath === destpath && fs.exists(filepath);
};

const mkdir = (dirname, options) => {
  return new Promise(resolve => fs.mkdir(dirname, options, () => resolve()));
};

const ensureNewline = (data, options) => {
  if (!options || options.newline !== true) return data;
  if (typeof data !== "string" && !isBuffer(data)) {
    return data;
  }

  // Only call `.toString()` on the last character. This way,
  // if data is a buffer, we don't need to stringify the entire
  // buffer just to append a newline.
  if (String(data.slice(-1)) !== "\n") {
    if (typeof data === "string") {
      return data + "\n";
    }
    return data.concat(Buffer.from("\n"));
  }

  return data;
};

crawl = (result, callback) => {
  var c = new Crawler({
    maxConnections: 10,
    callback: function(error, res, done) {
      var $ = res.$;
      callback(error, $);
      done();
    }
  });
  result.forEach(res => {
    c.queue(res.link);
  });
};

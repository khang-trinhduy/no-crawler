var search = require("../services/search");

exports.test = (req, res, next) => {
  search.query("Lãi suất ngân hàng Techcombank tháng 2 2020 kỳ hạn 3 tháng", result => {
    console.log(result);

    res.render("index", { title: "Express", result: result });
  });
};

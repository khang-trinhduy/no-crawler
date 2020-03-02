var express = require('express');
var router = express.Router();
var spider = require('../controllers/spider')


/* GET home page. */
router.get('/', spider.test);

module.exports = router;

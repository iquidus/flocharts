var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { active: 'index', minDate: false, maxDate: false });
});

router.post('/', function(req, res, next) {
  var minDate = req.body.minDateInput;
  var maxDate = req.body.maxDateInput;
  res.render('index', { active: 'index', minDate: minDate, maxDate: maxDate });
});

router.get('/usd', function(req, res, next) {
  res.render('usd', { active: 'usd', minDate: false, maxDate: false });
});

router.post('/usd', function(req, res, next) {
  var minDate = req.body.minDateInput;
  var maxDate = req.body.maxDateInput;
  res.render('usd', { active: 'usd', minDate: minDate, maxDate: maxDate });
});

router.get('/btc', function(req, res, next) {
  res.render('btc', { active: 'btc', minDate: false, maxDate: false });
});

router.post('/btc', function(req, res, next) {
  var minDate = req.body.minDateInput;
  var maxDate = req.body.maxDateInput;
  res.render('btc', { active: 'btc', minDate: minDate, maxDate: maxDate });
});

router.get('/api/marketchartdata', function(req, res, next) {
  var file = __dirname + '/../data/flomarketdata.json';
  jsonfile.readFile(file, function(err, obj) {
    if (err) {
      res.send(err);
    } else {
      res.send(obj);
    } 
  });
});

router.get('/api/bitcoinchartdata', function(req, res, next) {
  var file = __dirname + '/../data/bitcoinaverage.json';
  jsonfile.readFile(file, function(err, obj) {
    if (err) {
      res.send(err);
    } else {
      res.send(obj);
    } 
  });
});
module.exports = router;

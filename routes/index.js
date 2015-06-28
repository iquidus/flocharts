var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { active: 'index', minDate: -1, maxDate: -1, price: 'btc', volume: 'daily' });
});

router.get('/:price/:volume/:mindate/:maxdate', function(req,res, next) {
  res.render('index', { active: 'index', minDate: req.params['mindate'], maxDate: req.params['maxdate'], price: req.params['price'], volume: req.params['volume']});
});

router.get('/bitcoin', function(req, res, next) {
  res.render('btc', { active: 'bitcoin', minDate: false, maxDate: false });
});

router.post('/bitcoin', function(req, res, next) {
  var minDate = req.body.minDateInput;
  var maxDate = req.body.maxDateInput;
  res.render('btc', { active: 'bitcoin', minDate: minDate, maxDate: maxDate });
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

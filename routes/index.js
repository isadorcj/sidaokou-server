var express = require('express');
var router = express.Router();

var db = require('../quieries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/stores', db.getAllStoreNames);
router.get('/api/stores/:id', db.getSingleStore);
router.post('/api/stores', db.createStore);
router.put('/api/stores/:id', db.updateStore);
router.delete('/api/stores/:id', db.removeStore);

module.exports = router;

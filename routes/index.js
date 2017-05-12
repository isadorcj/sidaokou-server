var express = require('express');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/stores', db.getAllStoreNames);
router.get('/api/stores/:id&:second', db.getSingleStore);
router.post('/api/stores', db.createStore);
router.put('/api/stores/:id', db.updateStore);
router.delete('/api/stores/:id', db.removeStore);
router.post('/api/postsample', db.printPostSample);
router.get('/api/getsample', db.printGetSample)

module.exports = router;

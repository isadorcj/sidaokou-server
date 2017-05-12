var promise = require('bluebird');
var StoreProcessor = require('./processors/StoreProcessor.js');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var db = pgp({
    host: '192.168.2.28',
    port: 5432,
    database: 'ottawafood',
    user: 'postgres',
    password: 'postgres'
});

// add query functions

module.exports = {
  getAllStoreNames: getAllStoreNames,
  getSingleStore: getSingleStore,
  createStore: createStore,
  updateStore: updateStore,
  removeStore: removeStore,
  printPostSample: printPostSample,
  printGetSample: printGetSample
};

function printGetSample(req, res, next) {
    process.stdout.write("hello: " + req.query.name + " ");
        res.status(200)
                .json({
                  status: 'success',
                  data: req.query.name,
                  message: 'print sample'
                });
}

function printPostSample(req, res, next) {
    var body = req.body.name;
    var query = req.query.id;
    process.stdout.write("hello: " + body + " ");
    
}

function getAllStoreNames(req, res, next){
    StoreProcessor.getAllStoreNames(db, req, res, next);
}

function getSingleStore(req, res, next){
    StoreProcessor.getSingleStore(db, req, res, next);
}

function createStore(req, res, next){
    
}

function updateStore(req, res, next){
    
}

function removeStore(req, res, next){
    
}
var promise = require('bluebird');
var StoreForDisplay = require('./models/store_for_display.js');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
// var connectionString = 'postgres://192.168.2.28:5432/ottawafood';
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
  removeStore: removeStore
};

function getAllStoreNames(req, res, next){
	db.any('select * from stores')
		.then(function (data) {
            
            var retVal = [];
            data.forEach(function(entry){
                var newStore = new StoreForDisplay(entry.id, entry.name);
                var display = entry.name;
                retVal.push(newStore);
            });


			res.status(200)
			.json({
				status: 'success',
				sotre_data: retVal,
                message: 'Retrieved ALL stores'
			})
        }).catch(function (err) {
                return next(err);
            });
}

function getSingleStore(req, res, next){

}

function createStore(req, res, next){
    
}

function updateStore(req, res, next){
    
}

function removeStore(req, res, next){
    
}
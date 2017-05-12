var StoreForDisplay = require('../models/store_for_display.js');
module.exports = {
                   getAllStoreNames: getAllStoreNames,
                   getSingleStore: getSingleStore,
                   createStore: createStore,
                   updateStore: updateStore,
                   removeStore: removeStore
};

function getAllStoreNames(db, req, res, next){
	db.any('select * from stores')
		.then(function (data) {

            var retVal = [];
            data.forEach(function(singleData){
                var newStore = retrieveStoreBasicInfo(singleData);

                retVal.push(newStore);
            });


			res.status(200)
			.json({
				status: 'success',
				data: retVal,
                message: 'Retrieved ALL stores'
			})
        }).catch(function (err) {
                return next(err);
            });
};

function getSingleStore(db, req, res, next) {
  var storeID = parseInt(req.params.id);
  db.one('select * from stores where id = $1', storeID)
    .then(function (data) {
      var newStore = retrieveStoreBasicInfo(data);

      res.status(200)
        .json({
          status: 'success',
          data: newStore,
          message: 'Retrieved ONE store'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};


function createStore(db, req, res, next){

}

function updateStore(db, req, res, next){

}

function removeStore(db, req, res, next){

}

function retrieveStoreBasicInfo(storeFullInfo){
    var simpleStore = new StoreForDisplay(storeFullInfo.id, storeFullInfo.name);
    return simpleStore;
}
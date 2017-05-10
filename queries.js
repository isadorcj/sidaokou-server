var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://192.168.2.28:5432/puppies';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllStoreNames: getAllStoreNames,
  getSingleStore: getSingleStore,
  createStore: createStore,
  updateStore: updateStore,
  removeStore: removeStore,
  createItem: createItem,
  updateItem: updateItem,
  removeItem: removeItem
};
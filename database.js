//var dbUrl = "blog";
var dbUrl = "https://api.mongolab.com/api/1/databases?apiKey=51c215c34b4b2c451000000e"
var collections = ["posts"];


var db = require("mongojs").connect(dbUrl, collections);


module.exports = db;
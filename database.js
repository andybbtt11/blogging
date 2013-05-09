var dbUrl = "blog";
var collections = ["posts"];


var db = require("mongojs").connect(dbUrl, collections);


module.exports = db;
var dbUrl = "mongodb://andybbtt11:lllllll8@ds027748.mongolab.com:27748/blog";
var collections = ["posts"];

console.log(dbUrl, collections);
var db = require("mongojs").connect(dbUrl, collections);


module.exports = db;

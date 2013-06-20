//var dbUrl = "blog";
var dbUrl = "mongodb://blog:lKHLuxs5m8zr0nzbKrd4VlFY6jx8ZFRTd3hLC864zy0-@ds027748.mongolab.com:27748/blog"
var collections = ["posts"];


var db = require("mongojs").connect(dbUrl, collections);


module.exports = db;
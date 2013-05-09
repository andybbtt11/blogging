var db = require('../database.js');

exports.posts={};

exports.posts.all = function(req,res){
	db.posts.find(function(err, expenses){
	    if(err) return;
	    res.json(expenses);
  	});
};

exports.posts.one = function(req, res){
	var postId = db.ObjectId(req.params.id);
	db.posts.findOne({"_id" : postId}, function(err,post){
		if(err) return;
		res.json(post);
	});
};

exports.posts.create = function(req, res){
	res.json(req.body);
	db.posts.save(req.body);
};
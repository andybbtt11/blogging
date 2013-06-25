var db = require('../database.js');

exports.posts={};

exports.posts.all = function(req,res){
	db.posts.find(function(err, posts){
	    if(err) return;
	    res.json(posts);
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
    var data = req.body;
    data.title = data.title.replace(/</g, '&lt;');
    
    res.json(data);
    db.posts.save(req.body);
};
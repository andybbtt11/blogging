var BlogsCollection = Backbone.Collection.extend({

	model: BlogModel,

	url: 'data/data0508-3.json'
	//url:'127.0.0.1:3000/blogging'

});

var blogsCollection = new BlogsCollection;
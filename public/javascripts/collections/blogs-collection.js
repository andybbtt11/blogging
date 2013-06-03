var BlogsCollection = Backbone.Collection.extend({

	model: BlogModel,

	url: 'data/data0603.json'
	//url:'/blogging'

});

var blogsCollection = new BlogsCollection;
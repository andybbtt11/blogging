var BlogsCollection = Backbone.Collection.extend({

	model: BlogModel,

	url: 'data/data0528.json'
	//url:'/blogging'

});

var blogsCollection = new BlogsCollection;
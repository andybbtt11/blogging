var BlogsCollection = Backbone.Collection.extend({

	model: BlogModel,

	url: '/blogging'
	//url:'/blogging'

});

var blogsCollection = new BlogsCollection;
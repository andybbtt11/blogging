var BlogModel = Backbone.Model.extend({

	urlRoot: 'data/',

	defaults:{
		'id' : null,
		'category' : 'Gaming',
		'title' : 'No Title Entered',
		'subtitle' : '',
		'date' : null,
		'mainimg' : null,
		'subimg' : null,
		'preview' : '',
		'cta' : '',
		'bodycopy' : '',
		'url' : 'default-url'
	},

	initialize: function(){

	}

});

var blogModel = new BlogModel;
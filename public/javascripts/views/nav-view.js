var NavView = Backbone.View.extend({

	el: '.nav',

	collection: blogsCollection,

	events:{
		'click .btn-newpost' : 'newPost'
	},

	location: null,

	initialize: function(){

		var that = this;
		this.template = _.template(tpl.get('nav-view'));

		this.render();

	},

	render: function(){

		// Populate the dom with the data
		this.$el.append( this.template() );
		
	},

	newPost: function(event){
		event.preventDefault();
		var newPostview = new NewPostView;
	}

});
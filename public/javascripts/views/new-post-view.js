var NewPostView = Backbone.View.extend({

	el: '.container.new-post',

	collection: blogsCollection,

	events:{
		'click .back' : 'cancel'
	},

	location: null,

	initialize: function(){

		var that = this;
		this.template = _.template(tpl.get('new-post'));

		this.render();

	},

	render: function(){
		this.$el.removeClass('hide');
		$('.blog-content').hide();
		// Populate the dom with the data
		this.$el.append( this.template() );
		
	},

	cancel: function(){
		this.$el.empty().addClass('hide');
		$('.blog-content').show();
	}

});
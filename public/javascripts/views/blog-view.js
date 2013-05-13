// Create List for Expense Items

var BlogListView = Backbone.View.extend({

	el: 'div.blog-list',

	collection: blogsCollection,

	scrollIt: "test",

	loader: $('.loader'),

	details: $('.blog-details'),

	initialize: function(){
		var that = this;

		this.details.removeClass('show').addClass('hide');

		this.collection.bind('reset', this.render, this);	

		if( this.collection.length ){
			this.render();
			this.$el.addClass('show');
		} else {
			this.collection.fetch().complete(function(){
				that.loader.hide();
				that.$el.addClass('show');
			});
		}
	},

	render: function(){
		// Populate each el with it's model
		_.each( this.collection.models, function( blogModel ){
			var view = new BlogItemView( { model: blogModel } );
			this.$el.append( view.render() );
		}, this);

		return this.el;
	}
});

// Populate the List with Expense Items

var BlogItemView = Backbone.View.extend({

	tagName:'div',

	className:'blog-item',

	events: {
		'click' : 'showDetail'
	},

	collection: blogsCollection,

	initialize: function(){
		this.template = _.template(tpl.get('blog-template'));
		this.bind('reset', this.render, this);	
	},

	render: function(){
		this.$el.attr('id',this.model.get('id'));
		this.$el.html( this.template( this.model.toJSON() ));
		return this.el
	},

	showDetail: function(){
		// Keep this the same as the href in the template
		window.location = '#' + this.model.get('id');
	}

});

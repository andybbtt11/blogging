// Create List for Expense Items

var BlogListView = Backbone.View.extend({

	el: 'div.blog-list',

	collection: blogsCollection,

	scrollIt: "test",

	loader: $('.loader'),

	initialize: function(){
		var that = this;
		this.collection.bind('reset', this.render, this);	

		// Don't fetch if we already have it!
		if(this.collection.length){
			this.render();
			this.$el.fadeIn(200);
		} else {
			this.loader.show();
			this.collection.fetch().complete(function(){
				that.loader.hide();
				this.$el.fadeIn(200);
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
		this.$el.html( this.template( this.model.toJSON() ));
		return this.el
	},

	showDetail: function(){
		// Keep this the same as the href in the template
		window.location = '#' + this.model.get('id');
		this.$el.attr('id','active');
		return;
	}

});

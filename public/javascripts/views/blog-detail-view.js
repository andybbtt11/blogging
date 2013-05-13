var BlogDetailView = Backbone.View.extend({

	el: 'div.blog-details',

	collection: blogsCollection,

	location: null,

	loader: $('.loader'),

	events: {
	},

	initialize: function(){

		var that = this;
		this.template = _.template(tpl.get('blog-detail'));
		this.collection.bind('reset', this.render, this);	

		// Grab the ID from the hash to load correct data
		this.location = window.location.hash.substring(1);

		this.$el.attr('id', this.location );
		
		// Don't fetch if we already have it!
		if(this.collection.length){
			this.render();
		} else {
			this.loader.show();
			this.collection.fetch().complete(function(){
				that.loader.hide();
			});
		}

	},

	render: function(){

		// Populate the dom with the data
		this.$el.append( this.template(this.collection.get(this.location).toJSON()) );

		// Scroll up to top
		$(/chrome|safari/i.test(window.navigator.userAgent) ? 'body' : 'html').animate( { scrollTop: 0 }, 100 );
		
		// Show content TODO: Use CSS.
		this.$el.removeClass('hide').addClass('show');
		
	}

});
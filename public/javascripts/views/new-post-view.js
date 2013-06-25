var NewPostView = Backbone.View.extend({

	el: '.container.new-post',

	model: blogModel,

	events:{
		'click .back' : 'cancel',
		'submit form' : 'save'
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

	save: function(event){
		event.preventDefault();

		var data = Backbone.Syphon.serialize(this);
		this.model.set(data);

		this.model.save();
	},

	cancel: function(){
		this.$el.empty().addClass('hide');
		$('.blog-content').show();
	}

});
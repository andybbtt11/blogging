var scrollIt = 'test';

var AppRouter = Backbone.Router.extend({ 

	routes: {
		'' : 'start',
		':id' : 'detail'
	},

	scrollToId: null,

	start: function(){
		var $getScroll = $(/chrome|safari/i.test(window.navigator.userAgent) ? 'body' : 'html'),
			getId = $('.blog-details').attr('id');

		var blogListView = new BlogListView;

		if ( !$('body').hasClass('started') ){
			$('body').addClass('started');
		} else {
			$('.blog-list').removeClass('hide').addClass('show');
			$getScroll.animate({ scrollTop: $('#'+ getId).offset().top}, 100);
		}

		$('.detail-content').each(function(){
			$(this).remove();
		});
	},

	detail: function(){
		// Hide the list
		// TODO: figure out a way to remove from DOM
		$('.blog-list').html('').removeClass('show').addClass('hide');

		var blogDetailView = new BlogDetailView;
	}

});
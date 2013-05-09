var scrollIt = 'test';

var AppRouter = Backbone.Router.extend({ 

	routes: {
		'' : 'start',
		':id' : 'detail'
	},

	start: function(){
		var $getScroll = $(/chrome|safari/i.test(window.navigator.userAgent) ? 'body' : 'html');

		// Clean up the detail $el
		$('.blog-details').children().remove();

		if ( !$('body').hasClass('started') ){

			// Show that the app has started and collection is fetched
			$('body').addClass('started');

			// Create the view
			var blogListView = new BlogListView;

		} else {

			// Show the list
			$('.blog-list').fadeIn(200);

			// Scroll to last clicked List Item
			$getScroll.animate({ scrollTop: $("#"+'active').offset().top}, 100);
			
			// Remove ACTIVE ID after scroll is finished.
			$('.blog-item').each(function(){
				$(this).attr('id','');
			});

		}
	},

	detail: function(){
		// Hide the list
		// TODO: figure out a way to remove from DOM
		$('.blog-list').hide();
		
		var blogDetailView = new BlogDetailView;
	}

});
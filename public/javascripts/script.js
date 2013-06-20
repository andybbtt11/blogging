$(document).ready(function(){

	tpl.loadTemplates(['blog-template', 'blog-detail', 'nav-view', 'new-post'], function () {
        app = new AppRouter();
        Backbone.history.start();
    });

});


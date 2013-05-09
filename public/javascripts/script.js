$(document).ready(function(){

	tpl.loadTemplates(['blog-template', 'blog-detail'], function () {
        app = new AppRouter();
        Backbone.history.start();
    });

});


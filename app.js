
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose'),
	engine = require('ejs-locals'),
	app = express();

app.configure(function(){
	// map .renderFile to ".html" files
	app.engine('ejs', engine);
	app.engine('html', require('ejs').renderFile);

	// make ".html" the default
	app.set('views', __dirname);
	app.set('view engine', 'html');
	
	app.set('port', process.env.PORT || 3000);
	//app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use('/public', express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', function(request, response) {
	response.render('index.html');
});

app.get('/blogging', routes.posts.all);
app.get('/blogging/:id', routes.posts.one);
app.post('/blogging', routes.posts.create);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});

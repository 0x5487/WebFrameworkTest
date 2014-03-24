
/**
 * Module dependencies.
 */

var routeEngine = require('./routes/routeEngine.js');
var express = require('express');
var app = express();
var router = express.Router();
var dust = require('dustjs-linkedin');
var cons = require('consolidate');

// all environments
//app.set('port', process.env.PORT || 3000);
app.engine("html", cons.dust);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view engine', 'ejs');
app.set('template_engine', "dust");
app.set('view engine', 'html');
app.set('view options', {layout: false});
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));

// development only
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}

//app.get('/users', user.list);
//app.get('/pages', page.index);
//routeEngine(app);

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/ejs', function (req, res) {
    var model = { Title:"Hello World"};
    res.render('helloworld1.ejs', model);
});

app.get('/jade', function (req, res) {
    var model = { Title:"Hello World"};
    res.render('helloworld2.jade', { Title:"Hello World"});
});

app.get('/dust', function (req, res) {
    var model = { Title:"Hello World"};
    res.render('helloworld3.html', { Title:"Hello World"});
});


app.listen(3000);

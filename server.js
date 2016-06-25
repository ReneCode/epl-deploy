
module.exports = function()  {
    var path = require('path');
    var serveStatic = require('serve-static');
    var routes = require('./routes/routes');
	var bodyParser = require('body-parser');
     
    var express = require('express');
    var app = express();
  
	app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
	app.use(bodyParser.json()); // support json encoded bodies

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug'); 
    app.use(serveStatic(path.join(__dirname, 'public')));

    routes(app);

    var http = require('http');
    var server = http.createServer(app);

    return server;  
};


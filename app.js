
var app = require('./server');
var port = process.env.PORT || 3333;
app().listen(port, function() {
	console.log("Server listen on port:", port);
});


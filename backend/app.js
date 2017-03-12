
var express = require('express');
var cors = require('cors');
var jwt = require('express-jwt');

const auth0Settings = require('./auth0-credentials.json');

var app = express();
app.use(cors())

var jwtCheck = jwt({
	secret: new Buffer(auth0Settings.secret),
	audience: auth0Settings.audience
});

// middleware - check auth token
app.use('/', jwtCheck);

app.use('/', (req, res) => {
	console.log(req.user);
	res.json("hallo hier ist der Server");
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server running - listen on port:", port);
})

var express = require('express');
var cors = require('cors');
var jwt = require('express-jwt');

const auth0Settings =  {
	secret: "qqxjV86azgpOOO3utyqrL-2eLYxaISOM2rrHg1jbMRK4ajrP3T7T4ONqi-VwtrtE",
	audience: "r12UEbyFznTZ3NE28AIhFaf0mM5ybycG"
}


var app = express();
app.use(cors())

var jwtCheck = jwt({
	secret: new Buffer(auth0Settings.secret, 'base64'),
	audience: auth0Settings.audience
});

// middleware - check auth token
app.use('/', jwtCheck);

app.use('/', (req, res) => {
	res.json("hallo");
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server running - listen on port:", port);
})
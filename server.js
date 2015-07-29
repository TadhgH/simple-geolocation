// Required Modules
var express    = require("express");
var compress   = require("compression");
var morgan     = require("morgan");
var bodyParser = require("body-parser");
var https      = require('https');

var app        = express();
var port       = process.env.PORT || 1337;

app.use(compress());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Start Server
app.listen(port, function() {
    console.log( "Express server listening on port " + port);
});

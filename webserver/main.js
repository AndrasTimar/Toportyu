var express = require('express');
var proxy = require('express-http-proxy');
var app = express();
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./resources/port.config');
var serverurl = properties.get('serverurl');
var webport = properties.get('webport');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

app.use(express.static('../web'));

app.use('/', proxy(serverurl));

app.listen(webport);

var compiler = webpack(webpackConfig);



compiler.watch({
        aggregateTimeout: 300,
        poll: true
    },
    function(err, stats) {
	
     var jsonStats = stats.toJson();
	 if(jsonStats.errors.length > 0)
	 {
		 console.log("Error:" + " "+ stats);	
	 }
	 else 
	 {
		 console.log("\nError: " + err);
	 }
    });

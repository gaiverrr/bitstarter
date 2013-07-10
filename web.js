var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());
var content;
app.get('/', function(request, response) {
	var result = fs.readFileSync('index.html', {encoding:'utf8'}, function(err, data)
	{
	//	content = data.toString();
	});
	response.send(result);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

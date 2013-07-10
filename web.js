var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());
var content;
app.get('/', function(request, response) {
 fs.readFileSync('index.html', function(err, data) 
  {
       content = data.toString();
  });
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

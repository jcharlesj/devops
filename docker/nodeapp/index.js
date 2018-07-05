var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Say Hello to node');
  });
  
var server = app.listen(3000, function(){
  console.log('This app is listening on port 3000');
 });

#!/usr/bin/node
var express = require('express');
var app = express();

//Serve files from public directory
app.use(express.static(__dirname + '/public'));

//If the file isn't found, send index.htm
app.get('/',function(req,res){
	res.redirect('index.htm');
});


//Serve api
app.get('/api/', function(req, res){
	res.send('GET');
});

//start serves
app.listen(1337);

console.log("server running at localhost:1337");

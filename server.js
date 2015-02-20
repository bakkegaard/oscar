#!/usr/bin/node
var express = require('express');
var app = express();

var mysql =  require('mysql');
var config = require('./config.js')

var pool = mysql.createPool({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.database
});

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

//Serve files from public directory
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	res.render('standings', {
		title: 'Home',
        year: config.year
	});
});

app.get('/nominations', function(req, res){
    res.render('nominations', {
        title: 'Home',
        year: config.year
    });
    pool.getConnection(function(err,connection){
        connection.query("select * from film", function(err, rows, fields) {
            console.log(rows);
        });
    });
});

app.get('/make_guess', function(req, res){
    res.render('make_guess', {
        title: 'Make guess',
        year: config.year
    });
});

//start server
app.listen(1337);

console.log("server running at localhost:1337");

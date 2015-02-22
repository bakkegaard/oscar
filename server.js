#!/usr/bin/node
var express = require('express');
var app = express();

var mysql =  require('mysql');
var config = require('./config.js')
var application_js = require('./javascript/application.js')

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
        year: config.year,
        path: 'standings'
	});
});

app.get('/nominations', function(req, res){
    pool.getConnection(function(err,connection){
        connection.query("select t1.id,filmnavn,note,navn as kategori, winner from (SELECT nominering.id,winner, navn as filmnavn,note,kategori FROM (film INNER JOIN nominering ON film.id=nominering.film)) as t1 INNER JOIN kategori ON kategori.id=t1.kategori", function(err, rows, fields) {
            if(err) {
                throw err;
            }
            res.render('nominations', {
                title: 'Home',
                year: config.year,
                path: 'nominations',
                results: application_js.convert_result(rows)
            });
        });
    });
});

app.get('/make_guess', function(req, res){
    pool.getConnection(function(err,connection){
        connection.query("select t1.id,filmnavn,note,navn as kategori, winner from (SELECT nominering.id,winner, navn as filmnavn,note,kategori FROM (film INNER JOIN nominering ON film.id=nominering.film)) as t1 INNER JOIN kategori ON kategori.id=t1.kategori", function(err, rows, fields) {
            if(err) {
                throw err;
            }
            res.render('make_guess', {
                title: 'Make guess',
                year: config.year,
                path: 'make_guess',
                results: application_js.convert_result(rows)
            });
        });
    });
});

app.post('/submit_guess', function(req, res) {
    console.log(res.body);
    res.render('standings', {
        title: 'Home',
        year: config.year,
        path: 'standings'
    });
});

//start server
app.listen(1337);

console.log("server running at localhost:1337");

#!/usr/bin/node
var express = require('express');
var app = express();

var mysql =  require('mysql');
var config = require('./config.js')
var application_js = require('./javascript/application.js')

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


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
    pool.getConnection(function(err,connection){
        connection.query("select navn,SUM(winner) as sum FROM ( (select * from user INNER JOIN guess ON user.id=guess.user) AS t1 INNER JOIN nominering ON t1.nominering=nominering.id) GROUP BY navn ORDER BY sum(winner) DESC", function(err, rows, fields) {
            console.log(rows);
            if(err) {
                throw err;
            }
            res.render('standings', {
                title: 'Home',
                year: config.year,
                path: 'standings',
                results: rows
            });
        });
    });

});
app.post('/guess', function(req, res){
	var obj= req.body;
	var nomination= new Array;
	var name;
	for(i in obj){
		if(i==="name") name=obj[i];
		else nomination.push(obj[i]);
	}
	
		
    pool.getConnection(function(err,connection){
        connection.query("INSERT INTO user (navn) VALUES (\'"+name+"\')", function(err, result) {
			  var id= result.insertId;
            if(err) {
                throw err;
            }
				for(var i=0;i<nomination.length;i++){

				(function(nom){
				 pool.getConnection(function(err,connection){
					  connection.query("INSERT INTO guess (user,nominering) VALUES(\'"+id+"\',\'"+nom+"\')", function(err, rows, fields) {
								
					  });
				 });
				})(nomination[i]);
			}

        });
    });
	res.render('guess',{
		title: 'Home',
		year: config.year,
		path: 'guess'
	});
});


app.get('/nominations', function(req, res){
    pool.getConnection(function(err,connection){
        connection.query("select t1.id,filmnavn,note,navn as kategori, winner from (SELECT nominering.id,winner, navn as filmnavn,note,kategori FROM (film INNER JOIN nominering ON film.id=nominering.film)) as t1 INNER JOIN kategori ON kategori.id=t1.kategori", function(err, rows, fields) {
			  console.log(rows);
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
                title: 'Home',
                year: config.year,
                path: 'make_guess',
                results: application_js.convert_result(rows)
            });
        });
    });
});


//start server
app.listen(1337);

console.log("server running at localhost:1337");

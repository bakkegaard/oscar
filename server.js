var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var mysql =  require('mysql');
var config = require('./config.js')
var application_js = require('./javascript/application.js')

var pool = mysql.createPool({
	host     : config.host,
	user     : config.user,
	password : config.password,
	database : config.database
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

//Serve files from public directory
app.use(express.static(__dirname + '/public'));

var sql_standings= "SELECT name,"+
       "SUM(winner) AS sum "+
"FROM ("+
      "(SELECT * "+
         "FROM user "+
         "INNER JOIN guess ON user.id=guess.user) AS t1 "+
      "INNER JOIN nominations ON t1.nomination=nominations.id) "+
"GROUP BY name "+
"ORDER BY SUM(winner) DESC";
app.get('/', function(req, res){
	pool.getConnection(function(err,connection){
		connection.query(sql_standings, function(err, rows, fields) {
			if(err) {
				throw err;
			}
							connection.release();
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
	console.log(obj);
	var name;
	for(i in obj){
		if(i==="name") name=obj[i];
		else nomination.push(obj[i]);
	}

	if(name==""){
	res.render('mistake',{
		title: 'mistake',
		year: config.year,
		error: "You have to choose a name",
		path: 'mistake'
	});
	}
	if(nomination.length!=24){
	res.render('mistake',{
		title: 'mistake',
		year: config.year,
		error: "You have to answer all categories",
		path: 'mistake'
	});
	}



	pool.getConnection(function(err,connection){
		connection.query("INSERT INTO user (name) VALUES (\'"+name+"\')", function(err, result) {
			var id= result.insertId;
			if(err) {
				throw err;
			}
			var sql="INSERT INTO guess (user,nomination) values ("+ id +","+nomination[0]+")";
			for(var i=1;i<nomination.length;i++){
				sql+=",(\'"+id+"\',\'"+nomination[i]+"\')";

			}

						connection.query(sql, function(err, rows, fields) {
							if(err){
								throw err;
							}

							connection.release();
							
							res.render('guess',{
								title: 'Home',
								year: config.year,
								path: 'guess'
							});
						});

		});
	});
});

var sql_nominations= "SELECT t1.id, "+
       "movie_title, "+
       "note, "+
       "name AS category, "+
       "winner "+
"FROM "+
  "(SELECT nominations.id, "+
          "winner, "+
          "title AS movie_title, "+
          "note, "+
          "category "+
   "FROM (movies "+
         "INNER JOIN nominations ON movies.id=nominations.movie)) AS t1 "+
"INNER JOIN category ON category.id=t1.category ";

app.get('/nominations', function(req, res){
	pool.getConnection(function(err,connection){
		connection.query(sql_nominations, function(err, rows, fields) {
			if(err) {
				throw err;
			}
							connection.release();
			res.render('nominations', {
				title: 'Home',
				year: config.year,
				path: 'nominations',
				results: application_js.convert_result(rows)
			});
		});
	});
});

var sql_make_guess= "select t1.id,filmnavn,note,navn as kategori, winner from (SELECT nominering.id,winner, navn as filmnavn,note,kategori FROM (film INNER JOIN nominering ON film.id=nominering.film)) as t1 INNER JOIN kategori ON kategori.id=t1.kategori";

app.get('/make_guess', function(req, res){
	pool.getConnection(function(err,connection){
		connection.query(sql_nominations, function(err, rows, fields) {
			if(err) {
				throw err;
			}
							connection.release();
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

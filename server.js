var http = require('http');
var fs = require('fs');
var config = require('./config.js');
var mysql      = require('mysql');

var pool = mysql.createPool({
	host     : config.localhost,
	user     : config.user,
	password : config.password,
	database	: config.database
});

String.prototype.replaceAt=function(index, character) {
	    return this.substr(0, index) + character + this.substr(index+character.length);
}

http.createServer(function (req, res) {

	var s= req.url.substring(1).split("/");

	if(s[0]==='main.js') {
		res.writeHead(200, {'Content-Type': 'application/javascript'});
		fs.readFile('main.js', 'utf-8',function(err,data) {
			res.write(data);
			res.end();
		});
	}
	else if(s[0]==='vote'){
		makeVotePage(res,s[1])
	}
	else if(s[0]=='post'){
		req.on('data', function (data) {
			var body='';
			body +=data;

			var temp= body.substring(5).split("=");

			var hash=temp[0].split("&")[0];

			var numbers= new Array();

			for(var i=1;i<temp.length;i++){
				numbers.push(parseInt(temp[i]));
			}

	pool.getConnection(function(err,connection){
		connection.query("select * from user where hash='"+hash+"'", function(err, rows, fields) {
				var id= rows[0].id;
				var query="";	
				query+= "INSERT INTO guess(user,nominering) VALUES";
				for(var i=0;i<numbers.length;i++){
					query+= "('"+id+"','"+numbers[i]+"'),";
				}

				query= query.replaceAt(query.length-1, ";");

				console.log(query);

				pool.getConnection(function(err,connection){
					connection.query(query);	

					var page= makePage(res);

					page.write(2,"done!");

					page.toString();
				});

		});
		
	});
	});
	}
	else {
		res.writeHead(200, {'Content-Type': 'text/html'});

		makeFrontPage(res)

	}	


}).listen(1337, '127.0.0.1'); 

function makePage(res){

	var title= "";
	var main= "";
	var body= "";

	function start(){
		lineMain(0,"<html>");
		lineMain(1,"<head>");
		lineMain(2,'<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>');
		lineMain(2,'<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">');
		lineMain(2,'<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">');
		lineMain(2,'<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>');
		lineMain(2,'<script src="main.js"></script>');
	}
	function middle(){
		lineMain(1,"</head>");
		lineMain(1,"<body>");
	}

	function end(){
		lineMain(1,"</body>");
		lineMain(0,"</html>");
	}

	function lineMain(tabs,s){
		main+=line(tabs,s);
	}

	function line(tabs,s){
		var temp="";
		for(var i=0;i<tabs;i++){
			temp+='\t';
		}
		temp+=s;
		temp+='\n';
		return temp;
	}

	var obj= {};

	obj.setTitle= function (s){
		title=s;
	}
	obj.toString= function(){
		start()
		lineMain(2,"<title>"+title+"</title>");
		middle();
		main+=body;
		end();
		res.write(main);
		res.end();
	}
	obj.write = function(tabs,s){
			body+= line(tabs+2,s);
		}
	return obj;	
}

function makeVotePage(res,hash){

	var page= makePage(res);

	console.log(hash);

	page.write(0,'<h1>Voting</h1>');

	pool.getConnection(function(err,connection){
		connection.query("select t1.id,filmnavn,note,navn as kategori from (SELECT nominering.id, navn as filmnavn,note,kategori FROM (film INNER JOIN nominering ON film.id=nominering.film)) as t1 INNER JOIN kategori ON kategori.id=t1.kategori ORDER BY kategori", function(err, rows, fields) {
	
		  if (err) throw err;
		  page.write(1,'<form name="voting" action="/post"method="post">');

			page.write(2,'<input type="hidden" name="hash" value="'+hash+'"/>');
			var i=0, current='lalala';
			while(i<rows.length){

				if(current==rows[i].kategori){
					page.write(3,'<input name="'+current+'" type="radio" value="'+rows[i].id+'"/> '+rows[i].filmnavn+' - <b>'+rows[i].note+'</b><br/>');
				}
				else{
					if(i!=0) page.write(4,'</div></div>');
					current=rows[i].kategori;
			page.write(2,'<div class="panel panel-default">');
			page.write(3,'<div class="panel-heading">');
			page.write(4,'<h3 class="panel-title">'+rows[i].kategori+'</h3>');
			page.write(3,'</div>');
			page.write(3, '<div class="panel-body">');

			page.write(3,'<input name="'+current+'" type="radio" value="'+rows[i].id+'"/> '+rows[i].filmnavn+' - <b>'+rows[i].note+'</b><br/>');
			}
		i++;
			}
			page.write(4,'</div></div>');
			page.write(3,'<input type="submit" value="Vote!">');
		  page.toString();
		});
	});
}

function makeFrontPage(res){
	var page = makePage(res);

	page.write(0,'<center>');
	page.write(1,'<div id="main">');
	page.write(2,'<h1>Oscars '+config.year+'</h1>');
	page.write(1,'</div>');
	page.write(1,'<ul class="nav nav-tabs" id="myTabs">');
	page.write(2,'<li class="active"><a href="#scoreboard">Scoreboard</a></li>');
	page.write(2,'<li><a href="#nominations">Nominations</a></li>');
	page.write(1,'</ul>');
	page.write(1,'<div class="tab-content">');
	page.write(2,'<div class="tab-pane active" id="scoreboard">');
	makeScoreboard(page, 2);
}

function makeScoreboard(page, tab) {
	page.write(tab+1,'<div class="panel panel-default">');
	page.write(tab+2,'<div class="panel-heading"></div>');
	page.write(tab+2,'<table class="table">');
	page.write(tab+3,'<tr>');
	page.write(tab+4,'<th>Name</th>');
	page.write(tab+4,'<th>Correct</th>');
	//page.write(tab+4,'<th>Wrong</th>');
	page.write(tab+3,'</tr>');
	pool.getConnection(function(err, connection){
		connection.query('select navn,SUM(winner) as sum FROM ( (select * from user INNER JOIN guess ON user.id=guess.user) AS t1 INNER JOIN nominering ON t1.nominering=nominering.id) GROUP BY navn ORDER BY sum(winner) DESC', function(err,rows,fields){
			for(var i=0;i<rows.length;i++){
				page.write(0,'<tr>');
				page.write(0,'<td>'+rows[i].navn+'</td>');
				page.write(0,'<td>'+rows[i].sum+'</td>');
				page.write(0,'</tr>');
			}
			page.write(tab+2,'</table>');
			page.write(tab+1,'</div>');	

			page.write(2,'</div>');
			page.write(2,'<div class="tab-pane" id="nominations">');
			makeNominations(page, 2);
		});

	});
}

function makeNominations(page, tab) {
	pool.getConnection(function(err, connection) {
		connection.query("select t1.id,filmnavn,note,navn as kategori, winner from (SELECT nominering.id,winner, navn as filmnavn,note,kategori FROM (film INNER JOIN nominering ON film.id=nominering.film)) as t1 INNER JOIN kategori ON kategori.id=t1.kategori", function(err, rows, fields) {
			if (err) throw err;
			
			var i = 0, current = '', winning = "";
			while(i < rows.length) {
				if(current != rows[i].kategori) {
					if(i != 0) {
						page.write(tab+3,'<p>Winner: <b>' + winning + '</b></p>');
						page.write(tab+2,'</div>');
						page.write(tab+1,'</div>');
						winning = "";
					}
					current=rows[i].kategori;
					
					page.write(tab+1,'<div class="panel panel-default">');
					page.write(tab+2,'<div class="panel-heading">');
					page.write(tab+3,'<h3 class="panel-title">' + current + '</h3>');
					page.write(tab+2,'</div>');
					page.write(tab+2,'<div class="panel-body">');
					if(rows[i].kategori == "Best Actor" || rows[i].kategori == "Best Actress" || rows[i].kategori == "Best Director"|| rows[i].kategori == "Best Supporting Actor" || rows[i].kategori == "Best Supporting Actress") {
						page.write(tab+3,'<p>' + rows[i].filmnavn + ' - <b>' + rows[i].note + '</b></p>');	
					} else {
						page.write(tab+3,'<p><b>' + rows[i].filmnavn + "</b> - " + rows[i].note + '</p>');	
					}
				} else {	
					if(rows[i].kategori == "Best Actor" || rows[i].kategori == "Best Actress" || rows[i].kategori == "Best Director" || rows[i].kategori == "Best Supporting Actor" || rows[i].kategori == "Best Supporting Actress") {
						page.write(tab+3,'<p>' + rows[i].filmnavn + ' - <b>' + rows[i].note + '</b></p>');	
					} else {
						page.write(tab+3,'<p><b>' + rows[i].filmnavn + "</b> - " + rows[i].note + '</p>');	
					}
				}
					if(rows[i].winner == 1) {
						if(rows[i].kategori == "Best Actor" || rows[i].kategori == "Best Actress" || rows[i].kategori == "Best Director" || rows[i].kategori == "Best Supporting Actor" || rows[i].kategori == "Best Supporting Actress"){
							winning = rows[i].note;
						} else {
							winning = rows[i].filmnavn;
						}
					}
				i++;
			}

			page.write(tab+2,'</div>');
			page.write(tab+1,'</div>');
			page.write(2, '</div>');
			page.write(1,'</div>');	
			
			page.write(0,'</center>');
			
			page.toString();
		});
	});
	
	return;
}

console.log('Server running at http://127.0.0.1:1337/');

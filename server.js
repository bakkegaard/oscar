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



http.createServer(function (req, res) {

	if(req.url==='/main.js') {
		res.writeHead(200, {'Content-Type': 'application/javascript'});
		fs.readFile('main.js', 'utf-8',function(err,data) {
			res.write(data);
			res.end();
		});
	}
	else if(req.url==='/vote'){
	makeVotePage(res)
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

function makeVotePage(res){

	var page= makePage(res);

	page.write(0,'<h1>Voting</h1>');

	pool.getConnection(function(err,connection){
		connection.query("select t1.id,filmnavn,note,navn as kategori from (SELECT nominering.id, navn as filmnavn,note,kategori FROM (film INNER JOIN nominering ON film.id=nominering.film)) as t1 INNER JOIN kategori ON kategori.id=t1.kategori", function(err, rows, fields) {
	
		  if (err) throw err;
		  page.write(1,'<form>');

		  rows.sort(function(a,b){return a<b});

			var i=0, current='lalala';
			while(i<rows.length){

				if(current==rows[i].kategori){
					page.write(3,'<input name="'+current+'" type="radio" id="'+rows[i].id+'"/> '+rows[i].filmnavn+'<br/>');
				}
				else{
					if(i!=0) page.write(4,'</div></div>');
					current=rows[i].kategori;
			page.write(2,'<div class="panel panel-default">');
			page.write(3,'<div class="panel-heading">');
			page.write(4,'<h3 class="panel-title">'+rows[i].kategori+'</h3>');
			page.write(3,'</div>');
			page.write(3, '<div class="panel-body">');

			page.write(3,'<input name="'+current+'" type="radio" id="'+rows[i].id+'"/> '+rows[i].filmnavn+'<br/>');
			}
		i++;
			}
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
	page.write(2,'<li><a href="#profile">Profile</a></li>');
	page.write(2,'<li><a href="#messages">Messages</a></li>');
	page.write(1,'</ul>');
	page.write(1,'<div class="tab-content">');
	page.write(2,'<div class="tab-pane active" id="scoreboard">');
	page.write(2, makeScoreboard());
	page.write(2,'</div>');
	page.write(2,'<div class="tab-pane" id="profile">2</div>');
	page.write(2,'<div class="tab-pane" id="messages">');
	page.write(3,'<h1>test</h1>');
	page.write(2,'</div>');
	page.write(1,'</div>');	
	
	page.write(0,'</center>');
	
	page.toString();
}

function makeScoreboard() {
	return '1';
}

console.log('Server running at http://127.0.0.1:1337/');

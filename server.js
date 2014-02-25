var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});

	var page=makePage();

	page.setTitle("Some nice title!");
	page.write("hello world!");

	res.write(makeFrontPage());

	res.end();

}).listen(1337, '127.0.0.1'); 
function makePage(){

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
		return main;
	}
	obj.write = function(tabs,s){
			body+= line(tabs+2,s);
		}
	return obj;	
}

function makeFrontPage(){
	var page = makePage();

	page.write(0,'<center>');
	page.write(1,'<div id="main">');
	page.write(2,'<h1>Oscars</h1>');
	page.write(1,'</div>');
	page.write(1,'<ul class="nav nav-tabs" id="myTabs">');
	page.write(2,'<li class="active"><a href="#">Scoreboard</a></li>');
	page.write(2,'<li><a href="#">Profile</a></li>');
	page.write(2,'<li><a href="#">Messages</a></li>');
	page.write(1,'</ul>');
	page.write(1,'<div class="tab-conent">');
	page.write(2,'<div class="tab-pane active" id="Scoreboard"></div>');
	page.write(2,'<div class="tab-pane" id="Profile"></div>');
	page.write(2,'<div class="tab-pane" id="Messages"></div>');
	page.write(1,'</div>');	
	
	page.write(0,'</center>');
	
	return page.toString();
}

console.log('Server running at http://127.0.0.1:1337/');

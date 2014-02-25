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
	var 
	title= "",
	body= "",
	start=
		"<html>\n"+
		"\t<head>\n"+
		'\t\t<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>\n'+
		'\t\t<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">\n'+
		'\t\t<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">\n'+
		'\t\t<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>\n',
	middle=
		"\t</head>\n" +
		"\t<body>\n",

	end= 
		"\t</body>\n"+
		"</html>\n";

	return {
		setTitle: function(s){
			title=s;
		},
		toString: function(){
		return start+
			"\t\t<title>"+title+"</title>\n"+
			middle+body+"\n"+end;
		},
		write: function(s){
			body+= "\t\t"+s;		
		}
	}
}

function makeFrontPage(){
	var page = makePage();

	page.write('<center>\n'+
			   '\t\t\t<div id="main">\n'+
			   '\t\t\t\t<h1>Oscars</h1>\n'+
			   '\t\t\t</div>\n');
	page.write('\n');
	page.write('\t<ul class="nav nav-tabs" id="myTabs">\n'+ 
			   '\t\t\t\t<li class="active"><a href="#">Scoreboard</a></li>\n'+
			   '\t\t\t\t<li><a href="#">Profile</a></li>\n'+
			   '\t\t\t\t<li><a href="#">Messages</a></li>\n'+
			   '\t\t\t</ul>\n');
	page.write('\n');
	page.write('\t<div class="tab-conent">\n'+
			   '\t\t\t\t<div class="tab-pane active" id="Scoreboard"></div>\n'+
			   '\t\t\t\t<div class="tab-pane" id="Profile"></div>\n'+
			   '\t\t\t\t<div class="tab-pane" id="Messages"></div>\n'+
			   '\t\t\t</div>\n');	
	
	page.write('</center>');
	
	return page.toString();
}

console.log('Server running at http://127.0.0.1:1337/');

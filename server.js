var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});

	var page=makePage();

	page.setTitle("Some nice title!");
	page.write("hello world!");

	res.write(page.toString());

	res.end();

}).listen(1337, '127.0.0.1');

function makePage(){
	var 
	title= "",
	body= "",
	start=
		"<html>\n"+
		" <head>\n",
	middle=
		" </head>\n" +
		" <body>\n",

	end= 
		" </body>\n"+
		"</html>\n";

	return {
		setTitle: function(s){
			title=s;
		},
		toString: function(){
		return start+
			"<title>"+title+"</title>"+
			middle+body+end;
		},
		write: function(s){
			body+=s;		
		}
	}
}

console.log('Server running at http://127.0.0.1:1337/');

var http = require("http");
var server = http.createServer(function(request, response){
 
 var headers = request.headers;
 var method = request.method;
 var url = request.url;
 
 if (url === "/login"){
	response.setHeader("Content-Type", "text/html");
 	response.end("<h1>Hello world</h1>");
 		
 }
 if (url === "/aboutus"){
	response.setHeader("Content-Type", "text/html");
 	response.end("<h1>About us</h1>");
 		
 } else {
 	response.setHeader("Content-Type", "text/html");
 	response.end("<h1>Not Found !</h1>");
 }

});

server.listen(3000);
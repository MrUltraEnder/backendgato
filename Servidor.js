var http = require('http');
var datos = [0,0,0,0,0,0,0,0,0];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(datos));
}).listen(process.env.PORT); 

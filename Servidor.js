var http = require('http');
var datos = [0,0,0,0,0,0,0,0,0];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(datos));
  if(req.url.lastIndexOf("juega")!==-1){
  res.write("lets go");
  }else
  {
    res.write("Game Over");
  }
  res.end();
  }
}).listen(process.env.PORT); 

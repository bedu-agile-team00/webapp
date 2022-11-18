const http = require('node:http');

const port = 4501;
const hostname = 'localhost';

const server = http.createServer( (req, res) => {
	res.statusCode = 200;
	res.setHeader( 'Content-Type', 'text/plain');
	res.end('Hola Hector\n');
});

server.listen( port, hostname, () => {
	console.log( 'Servidor Ejecutándose en http://' + hostname + ':' +  port + '/' );
});

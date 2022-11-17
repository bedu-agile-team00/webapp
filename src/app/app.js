// #Libreria Para inicializar el webserver
const http = require("http")
// Host para la conexion 0.0.0.0 para conectarse desde cualquier lugar
const hostname = '0.0.0.0'
// Puerto de escucha
const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello Yorch\n')
  })
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })
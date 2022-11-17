
/*Se crea el servidor web y se responde con el codigo 200 y saludo*/
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello Yorch\n')
  })
 /*Se escucha por el puerto 80*/ 
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })

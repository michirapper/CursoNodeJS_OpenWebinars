import http from 'http'

const server = http.createServer((request, response) => {

  //response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8' })
 // response.writeHead(400, {'Content-Type': 'application/json' })
  
 
   response.setHeader('Content-Type', 'application/json')
   response.statusCode = 301
  if (request.method === 'GET') {
    response.write('<h1>Metodo no permitido</h1>')
    return response.end()
  }
  response.write('<h1> Curso de Node de OpenWebinars!</h1>')
  response.end()
})

server.listen(8000, 'localhost', err => {
  if (err) {
    return console.log('Error', err)
  }
  console.log('Server abierto en http://localhost:8000')
})
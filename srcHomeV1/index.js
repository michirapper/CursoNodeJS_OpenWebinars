import fs from 'fs'
import http from 'http'

const file = `./src/index.html`

const server = http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
  //response.writeHead(200, { 'Content-Type': 'application/json' })

  fs.readFile(file, (err, content) => {
    if (err) {
      return console.log(err)
    }

    response.write(content)
   
   // response.write(JSON.stringify({"key" : "valor"}))
    return response.end()
  })
})

server.listen(8000, 'localhost', err => {
  if (err) {
    return console.log('Error: ', err)
  }

  console.log('Server opened listen on http://localhost:8000')
})
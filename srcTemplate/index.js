import path from 'path'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'

const app = express()
app.disable('x-powered-by')
app.set('env', 'development')

app.use(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ exteded: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) =>{
  res.render('home', {
    title: 'Curso de OpenWebinars',
    messeage: 'Nuestro primer layout con variables'
  })
})

app.listen('9000', () => {
  console.log('Servidor arrancado en http://localhost:9000')
})
import express from 'express'

import config from './config'
import router from './router'

import { connect } from './socket'

let _server

const server = {
  start () {
    const app = express()

    config(app)
    router(app)

    _server = app.listen(app.locals.config.PORT, () => {
      connect()

      const address = _server.address()
      const host = address.address === '::'
        ? 'localhost'
        : address

      const port = app.locals.config.PORT
      if (process.env.NODE_ENV !== 'test') {
        console.log(`Server opened listen on http://${host}:${port}`)
      }
    })

    return _server
  },
  close () {
    _server.close()
  }
}

export default server

if (!module.parent) {
  server.start()
}

process.on('unhandledRejection', (err, p) => {
  console.log('Custom Error: An unhandledRejection occurred')
  console.log(`Custom Error: Rejection: ${err}`)
})
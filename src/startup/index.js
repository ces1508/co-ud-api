const express = require('express')
const app = express()

let _router = null
let _port = null
let _appName = null

class Serve {
  constructor ({ AppRouter, PORT, APPLICATION_NAME }) {
    _router = AppRouter
    _port = PORT
    _appName = APPLICATION_NAME
  }

  start () {
    app.use(_router)
    app.listen(3000, err => {
      if (err) {
        console.log(`error startup app ${err.message}`)
        process.exit(0)
      }
      console.log(`${_appName} running on port ${_port}`)
    })
  }
}

module.exports = Serve

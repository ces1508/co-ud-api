const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares')

module.exports = function ({ HomeRouter }) {
  const router = express.Router()
  const apiRoutes = express.Router()

  apiRoutes
    .use(helmet())
    .use(cors())
    .use(express.json())
    .use(compression())

  apiRoutes.use('/home', HomeRouter)

  router.use('/api', apiRoutes)

  router.use('*', NotFoundMiddleware)
  router.use('*', ErrorMiddleware)

  return router
}

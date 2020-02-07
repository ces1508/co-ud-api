const router = require('express').Router()

module.exports = function ({ HomeController }) {
  router.get('/', HomeController.index)
  return router
}

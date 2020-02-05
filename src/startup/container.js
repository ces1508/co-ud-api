const { createContainer, asValue, asClass, asFunction } = require('awilix')
const { HomeService } = require('../services')
const { HomeController } = require('../controllers')
const AppRouter = require('../routes')
const { HomeRouter } = require('../routes/index.router')
const { APPLICATION_NAME, DATABASE_URI, PORT } = require('../config')
const Server = require('.')

const container = createContainer()

container.register({
  HomeService: asClass(HomeService).singleton()
}).register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
  AppRouter: asFunction(AppRouter).singleton(),
  HomeRouter: asFunction(HomeRouter).singleton()
}).register({
  PORT: asValue(PORT),
  APPLICATION_NAME: asValue(APPLICATION_NAME),
  DATABASE_URI: asValue(DATABASE_URI)
}).register({
  server: asClass(Server).singleton()
})

module.exports = container

const { createContainer, asValue, asClass, asFunction } = require('awilix')
const { HomeService, CommentService, IdeaService, UserService } = require('../services')
const { HomeController } = require('../controllers')
const AppRouter = require('../routes')
const { HomeRouter } = require('../routes/index.router')
const { APPLICATION_NAME, DATABASE_URI, PORT } = require('../config')
const { Comment, Idea, User } = require('../models')
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories')
const Server = require('.')

const container = createContainer()

container.register({
  HomeService: asClass(HomeService).singleton(),
  UserService: asClass(UserService).singleton(),
  CommentService: asClass(CommentService).singleton(),
  IdeaService: asClass(IdeaService).singleton()
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
}).register({
  UserModel: asValue(User),
  IdeaModel: asValue(Idea),
  CommentModel: asValue(Comment)
}).register({
  IdeaRepository: asClass(IdeaRepository).singleton(),
  CommentRepository: asClass(CommentRepository).singleton(),
  UserRepository: asClass(UserRepository).singleton()
})

module.exports = container

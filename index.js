const mongoose = require('mongoose')
const container = require('./src/startup/container')
const app = container.resolve('server')
const DATABASE_URI = container.resolve('DATABASE_URI')

mongoose.connect(DATABASE_URI, {
  useFindAndModify: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.start())
  .catch(e => console.log('EROR CONNECTING WITH DATBASE ', e.message))

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  PORT: process.env.PORT,
  DATABASE_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}`,
  APPLICATION_NAME: process.env.APPLICATION_NAME
}

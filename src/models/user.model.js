const mongoose = require('mongoose')
const { compare, hash, genSalt } = require('bcryptjs')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', async function userBeforeSave (next) {
  const user = this
  if (!user.isModified('password')) return next()
  const salt = await genSalt(10)
  const hasedPassword = await hash(user.password, salt)
  user.password = hasedPassword
  next()
})

UserSchema.methods.toJson = function () {
  const user = this.toObject()
  delete user.password
  return user
}

UserSchema.methods.comparePasswords = async function (password) {
  const isSamePassword = await compare(password, this.password)
  return isSamePassword
}

module.exports = mongoose.model('user', UserSchema)

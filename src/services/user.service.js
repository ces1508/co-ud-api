const BaseService = require('./base.service')

class UserService extends BaseService {
  constructor ({ UserRepository }) {
    super(UserRepository)
    this.repository = UserRepository
  }

  getUserByUserName (username) {
    return this.repository.getUserByUserName(username)
  }
}

module.exports = UserService

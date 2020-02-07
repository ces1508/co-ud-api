const Base = require('./base.respository')
let _user = null

class UserRespository extends Base {
  constructor ({ UserModel }) {
    super(UserModel)
    _user = UserModel
  }

  async getUserByUserName (username) {
    return _user.findOne({ username })
  }
}

module.exports = UserRespository

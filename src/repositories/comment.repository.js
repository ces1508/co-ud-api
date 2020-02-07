const Base = require('./base.respository')

class CommentRepository extends Base {
  constructor ({ CommentModel }) {
    super(CommentModel)
  }
}

module.exports = CommentRepository

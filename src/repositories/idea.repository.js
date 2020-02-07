const Base = require('./base.respository')
let _idea = null

class IdeaRepository extends Base {
  constructor ({ IdeaModel }) {
    super(IdeaModel)
    _idea = IdeaModel
  }

  getUserIdeas (author) {
    _idea.find({ author })
  }
}

module.exports = IdeaRepository

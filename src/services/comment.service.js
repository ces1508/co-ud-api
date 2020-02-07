const BaseService = require('./base.service')

let _commentRespository = null
let _ideaRepository = null

class CommentService extends BaseService {
  constructor ({ CommentRepository, IdeaRepository }) {
    super(CommentRepository)
    _commentRespository = CommentRepository
    _ideaRepository = IdeaRepository
  }

  async getIdeaComments (ideaId) {
    this.validatePresenceId(ideaId, 'IdeaId')
    const idea = await _ideaRepository.get(ideaId)
    const { comments } = idea
    return comments
  }

  async createComments (ideadId, comment) {
    this.validatePresenceId(ideadId, 'IdeadId')
    const idea = await _ideaRepository.get(ideadId)
    const createdComment = await _commentRespository.create(comment)
    const ideaComments = idea.comments
    ideaComments.push(createdComment)
    const ideaWithNewComment = await _ideaRepository.update(idea.id, { comments: ideaComments })
    return ideaWithNewComment
  }
}

module.exports = CommentService

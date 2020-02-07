const BaseService = require('./base.service')

class IdeaService extends BaseService {
  constructor ({ IdeaRepository }) {
    super(IdeaRepository)
    this.repository = IdeaRepository
  }

  getUserIdeas (author) {
    this.validatePresenceId(author, 'UserId')
    return this.repository.getUserIdeas(author)
  }

  async upVoteIdea (id) {
    this.validatePresenceId(id, 'IdeaId')
    const idea = await this.repository.get(id)
    const upVotes = idea.upVotes
    upVotes.push(true)
    const ideaVoted = await this.repository.update(idea.id, { upVotes })
    return ideaVoted
  }

  async downVote (id) {
    this.validatePresenceId(id, 'IdeaId')
    const idea = await this.repository.get(id)
    const downVotes = idea.downVotes
    downVotes.push(true)
    const ideaVoted = await this.repository.update(idea.id, { downVotes })
    return ideaVoted
  }
}

module.exports = IdeaService

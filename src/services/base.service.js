const ApplicationError = require('../helpers/error.helpers')

class BaseService extends ApplicationError {
  constructor (repository) {
    super()
    this.repository = repository
  }

  async get (id) {
    this.validatePresenceId(id)
    const currentEntity = await this.repository.get(id)
    if (!currentEntity) this.NotFound()
    return currentEntity
  }

  getAll () {
    return this.repository.getAll()
  }

  create () {
    return this.repository.create()
  }

  update (id) {
    this.validatePresenceId(id)
    return this.repository.update(id)
  }

  delete (id) {
    this.validatePresenceId(id)
    return this.repository.delete(id)
  }

  validatePresenceId (id, idName = 'id') {
    if (!id) {
      this.BadRequest(`${idName} must be sent`)
    }
  }
}

module.exports = BaseService

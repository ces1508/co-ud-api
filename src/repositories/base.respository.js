class BaseRespository {
  constructor (model) {
    this.model = model
  }

  async get (id) {
    return await this.model.findById(id)
  }

  getAll () {
    return await this.model.find()
  }

  async create (data) {
    return await this.model.create(data)
  }

  async update (id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true })
  }

  async delete (id) {
    return await this.model.findByIdAndDelete(id)
  }
}

module.exports = BaseRespository

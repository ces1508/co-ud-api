class BaseRespository {
  constructor (model) {
    this.model = model
  }

  get (id) {
    return this.model.findById(id)
  }

  getAll () {
    return this.model.find()
  }

  create (data) {
    return this.model.create(data)
  }

  update (id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
  }

  delete (id) {
    return this.model.findByIdAndDelete(id)
  }
}

module.exports = BaseRespository

class ApplicationError {
  BadRequest (message = 'unprocess request') {
    this._createError(400, message)
  }

  NotFound (message = 'resource') {
    this._createError(404, message)
  }

  /**
   * @private
   */
  _createError (status = 500, message = 'internal server error') {
    const error = new Error()
    error.status = status
    error.message = message
    throw error
  }
}

module.exports = ApplicationError

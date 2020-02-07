module.exports = function (err, req, res, next) {
  const httpStatus = err.status || 505
  res
    .status(httpStatus)
    .send({
      error: true,
      status: httpStatus,
      message: err.message || 'internal server error'
    })
}

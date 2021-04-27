const errorHandler = () => {
  return (err, req, res, next) => {
    console.log('Some error has occurred.', err)
  }
}

module.exports = errorHandler

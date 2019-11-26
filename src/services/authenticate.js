const jwt = require('jsonwebtoken')
const { secretKey } = require('../config')


const authenticate = (req, res, next) => {
  const token = req.headers['x-access-token']

  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' })
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
    }
    return next()
  })
}

module.exports = { authenticate }
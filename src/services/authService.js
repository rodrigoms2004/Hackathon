const jwt = require('jsonwebtoken')
const { 
  api_token_expiration_time,
  secretKey
} = require('../config')

const generateToken = data => {
  return jwt.sign(data, secretKey, { expiresIn: api_token_expiration_time })
}

const decodeToken = async token => {
  const data = await jwt.verify(token, secretKey)
  return data
}

const authorize = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    return res.status(400).send({ message: 'Access restricted' })
  } else {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(400).send({ message: 'Invalid token' })
      }
      return next()
    })
  }
}

module.exports = {
  generateToken,
  decodeToken,
  authorize
}

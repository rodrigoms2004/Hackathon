const authModel = require('../models/authModel')
const { generateToken } = require('../services/authService')

const { log } = require('../util/loggerTool')

const { api_token_expiration_time } = require('../config')

const authController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body
      const credentials = { username, password }

      const data = await authModel.login(credentials)   

      if (data[0]) {
        const { username, profile } = data[0]

        return res.status(200).send({
          token: await generateToken({ username, profile }), 
          username, 
          profile, 
          expirationTime: api_token_expiration_time
        })
      } else {
        return res.status(401).send({ message: data.error })
      }

    } catch (error) {
      log('authController', 'error', `Auth error: ${error}`) 
      return res.status(400).send({ message: error })
    }
  }
}

module.exports = authController
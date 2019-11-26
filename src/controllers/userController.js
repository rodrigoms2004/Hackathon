// const uuid = require('uuid/v4')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')

const { log } = require('../util/loggerTool')

const { authorizationKey } = require('../config')

const userController = {
  register: async (req, res) => {
    try {
      
      const { headers } = req
      const { authorization } = headers
  
      // if (authorization !== authorizationKey) {
      //   const msg = `You are not authorized to create new users`
      //   log('userController', 'info', msg) 
      //   return res.status(200).send({message: msg})
      // }

      const { username, email, password, profile, name } = req.body
      
      // const id = await uuid()
      const hash = await bcrypt.hash(password, 10)

      const user = {
        username,
        email,
        password: hash,
        profile,
        name
      }
      console.log(user)
      
      const data = await userModel.create(user)

      if (!data.hasOwnProperty('error')) {
        return res.status(201).send({
          username: `User ${username} created`
        })
      } else {
        log('userController', 'error', `User already exists`) 
        return res.status(409).send(data)
      }
    } catch (error) {
      log('userController', 'error', `Register error: ${error}`) 
      return res.status(400).send({ message: error.message })
    }
  }
}

module.exports = userController
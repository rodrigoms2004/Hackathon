const db = require('../database')
const bcrypt = require('bcrypt')
const { db_id } = require('../config')

const { log } = require('../util/loggerTool')


const authModel = {
  login : async user => {
    try {
      const { username, password } = user

      const connection = db.connection(db_id)

      const result = await connection
        .select([
          connection.raw('convert(username, char) as username'), 
          connection.raw('convert(password, char) as password'),
          'profile', 
          'email'
        ])
        .from('Users')
        .where('username', username)
        .then(result => result)
        .catch(error => {
          log('authModel', 'error', `SQL error: ${error}`)
          return { error: error.message }
        })
        .finally(() => {
          connection.destroy()
        })
      
      if (result.length === 0) {
          return {error: "User not found"}
      }

      const validatePassword = await bcrypt.compare(password, result[0].password)

      if (!validatePassword) {
        throw new Error('wrong username or password')
      }

      return result

    } catch (error) {
      log('authModel', 'error', `Auth error: ${error}`)
      return {error: error}
    }
  }
}

module.exports = authModel
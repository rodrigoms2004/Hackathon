const db = require('../database')
const { db_id } = require('../config')

const { log } = require('../util/loggerTool')

Object.prototype.isEmpty = function() {
    for (let key in this) {
        if(this.hasOwnProperty(key)) { return false; }
    }
    return true;
}

const userModel = {
  create: async user => {
    try {
      const { username } = user

      const connection = db.connection(db_id)

      const result = await connection
        .select('username')
        .from('Users')
        .where('username', username)
        .then(result => result)
        .catch(error => {
          log('userModel', 'error', `SQL error: ${error}`)
          return { error: error.message }
        })
        
      if (result[0] === undefined) {
        log('userModel', 'info', `Inserting user ${username}`)
        await connection.insert(user).into('Users')
          .catch(error => {
            log('userModel', 'error', `SQL error in insert: ${error}`)
            return { error: error.message }
          })
          .finally(() => {
            connection.destroy()
          })
          return result
      } else {
        connection.destroy()
        log('userModel', 'error', `User ${username} already exists!`)
        return {error: `User with e-mail ${username} already exists!`}
      }

    } catch (error) {
      log('userModel', 'error', `Register error: ${error}`)
      return {error: error.message}
    }
  }
}

module.exports = userModel
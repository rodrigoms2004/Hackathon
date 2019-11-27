const db = require('../database')
const { db_id } = require('../config')

const { log } = require('../util/loggerTool')

Object.prototype.isEmpty = function() {
    for (let key in this) {
        if(this.hasOwnProperty(key)) { return false; }
    }
    return true;
}

const gameModel = {
  read: async id => {
    try {

      const connection = db.connection(db_id)

      const result = await connection
        .select()
        .from('Games')
        .where('id', id)
        .then(result => result)
        .catch(error => {
          log('userModel', 'error', `SQL error: ${error}`)
          return { error: error.message }
        })
        
      if (result[0] === undefined) {
        log('gameModel', 'info', `Couldn't find game ${id}.`)
          return {error: `Game with id ${id} was not found!`}
        } else {
          return result
      }

    } catch (error) {
      log('gameModel', 'error', `Error while trying to get game by id: ${error}`)
      return {error: error.message}
    }
  }
}

module.exports = gameModel;
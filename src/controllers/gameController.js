const gameModel = require('../models/gameModel')

const { log } = require('../util/loggerTool')

const gameController = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      console.log(id);
      
      const data = await gameModel.read(id)

      return res.status(200).json(data);
      
    } catch (error) {
      log('gameController', 'error', `Game request error: ${error}`)
      return res.status(400).send({ message: error.message })
    }
  }
};

module.exports = gameController;
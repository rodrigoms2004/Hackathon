'use strict'

const {
  mysqlPool
}  = require('../config')

const knex = require('knex')

const connection = (id) => {
  // const connection = require('knex')({
  try {
      const connection = knex(mysqlPool[id])
      return connection
  } catch (error) {
      return error
  } 
}

module.exports = {
    connection
}


// https://github.com/knex/generic-pool-redux
// http://zetcode.com/javascript/knex/
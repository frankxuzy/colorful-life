const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getOneDay,
  updateActivity
}

function getOneDay (date, conn = connection) {
  return conn('Activities').where('date', date).select()
}

function updateActivity (date, hour, activity, conn = connection) {
  return conn('Activities')
    .where({
      date,
      hour
    }).update({activity})
}
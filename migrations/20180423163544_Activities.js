
exports.up = (knex, Promise) => {
  return knex.schema.createTable('Activities', table => {
    table.increments('id').primary()
    table.integer('date')
    table.integer('hour')
    table.string('activity')
    table.integer('tag')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Activities')
}

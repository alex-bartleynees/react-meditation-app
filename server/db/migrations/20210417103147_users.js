exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('total_time')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
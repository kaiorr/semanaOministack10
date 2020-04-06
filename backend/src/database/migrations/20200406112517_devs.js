exports.up = function(knex) {
  return knex.schema.createTable('devs', function(table) {
    table.string('id').primary()
    table.string('github_user').notNullable()
    table.string('bio').notNullable()
    table.string('avatar_url').notNullable()
    table.enu('column', [], { useNative: true, enumName: 'techs' }).notNullable()  

  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('devs')
};

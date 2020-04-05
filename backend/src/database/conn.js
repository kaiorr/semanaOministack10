const knex = require('knex')
const configuratiion = require('../../knexfile')

const conn = knex(configuratiion.development)

module.export = conn
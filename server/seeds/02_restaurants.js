const restaurants = require('../lib/restaurants')

exports.seed = (knex, Promise) => {
  return knex('restaurant').del()
    .then(() => {
      return knex('restaurant').insert(restaurants)
    })
    // .then(() => {
    //   return knex.raw('ALTER SEQUENCE restaurant_id_seq RESTART WITH 4;')
    // })
}
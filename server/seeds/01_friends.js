const friends = require('../lib/friends')

exports.seed = (knex, Promise) => {
  return knex('friend').del()
    .then(() => {
      return knex('friend').insert(friends)
    })
    // .then(() => {
    //   return knex.raw('ALTER SEQUENCE friend_id_seq RESTART WITH 4;')
    // })
}

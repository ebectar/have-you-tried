exports.seed = function(knex, Promise) {
  return knex('comment')
    .del()
    .then(function() {
      return knex('friend')
        .del()
        .then(function() {
          return knex('restaurant').del()
        })
    })
}
const knex = require('../db/database-connection')

module.exports = {
    list() {
        return knex('restaurant')
    },
    read(id) {
        return knex('restaurant').where('id', id).first()
    },
    create(restaurant) {
        return knex('restaurant').insert(restaurant, '*')
    },
    update(id, restaurant) {
        return knex('restaurant').where('id', id).update(restaurant, '*')
    },
    delete(id) {
        return knex('restaurant').where('id', id).del()
    },
}
const knex = require('../db/database-connection')

module.exports = {
    list() {
        return knex('friend')
    },
    read(id) {
        return knex('friend').where('id', id).first()
    },
    create(friend) {
        return knex('friend').insert(friend, '*')
    },
    update(id, friend) {
        return knex('friend').where('id', id).update(friend, '*')
    },
    delete(id) {
        return knex('friend').where('id', id).del()
    },
}
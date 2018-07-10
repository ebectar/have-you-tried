exports.up = (knex, Promise) => {
	return knex.schema.createTable('friend', (table) => {
		table.increments('id').primary()
		table.text('friend_name')
	})
}

exports.down = (knex, Promise) => {
	return knex.schema.dropTable('friend')
}
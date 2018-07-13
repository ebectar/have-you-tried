exports.up = (knex, Promise) => {
	return knex.schema.createTable('restaurant', (table) => {
		table.increments('id').primary()
		table.text('restaurant_name')
		table.text('location')
		table.text('lat')
		table.text('lng')
		table.boolean('user_tried')
	})
}

exports.down = (knex, Promise) => {
	return knex.schema.dropTable('restaurant')
}
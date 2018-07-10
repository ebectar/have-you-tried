exports.up = (knex, Promise) => {
	return knex.schema.createTable('comment', (table) => {
		table.increments('id').primary()
		table.integer('friend_id')
			.references('id')
			.inTable('friend')
			.onDelete('CASCADE')
			.index()
		table.date('date')
		table.integer('restaurant_id')
			.references('id')
			.inTable('restaurant')
			.onDelete('CASCADE')
			.index()
		table.text('comment_text')
		table.boolean('good_recommendation')
	})
}

exports.down = (knex, Promise) => {
	return knex.schema.dropTable('comment')
}
const express = require('express')
const router = express.Router()
const queries = require('../db/restaurantQueries')

function isValidId(request, response, next) {
	!isNaN(request.params.id) ?
		next() :
		next(new Error('Invalid ID'))
}

router.get('/', (request, response) => {
	return queries.list().then(restaurants => response.json(restaurants))
})

router.get('/:id', (request, response) => {
	return queries.read(request.params.id)
		.then(restaurant => {
			if (restaurant) {
				return response.json(restaurant)
			} else {
				return response.status(404).send({
					message: 'Restaurant not found!'
				})
			}
		})
})

router.post('/', (request, response, next) => {
	return queries.create(request.body).then(restaurant => response.json(restaurant[0]))
})

router.put('/:id', isValidId, (request, response, next) => {
	return queries.update(request.params.id, request.body)
		.then(restaurant => response.json(restaurant[0]))
})

router.delete('/:id', isValidId, (request, response) => {
	return queries.delete(request.params.id).then(() => {
		return response.json({
			message: 'Restaurant Deleted!'
		})
	})
})

module.exports = router
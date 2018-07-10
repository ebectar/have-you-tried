const express = require('express')
const router = express.Router()
const queries = require('../db/friendQueries')
const knex = require('../db/database-connection')

function isValidId(request, response, next) {
	!isNaN(request.params.id) ?
		next() :
		next(new Error('Invalid ID'))
}

function validFriend(submission) {
	const friendName = typeof submission.name == 'string' && submission.name.trim() != ''
	return friendName
}

router.get('/', (request, response) => {
	return queries.list().then(friends => response.json(friends))
})

router.get('/:id', isValidId, (request, response) => {
	return queries.read(request.params.id)
		.then(friend => {
			if (friend) {
				return response.json(friend)
			} else {
				return response.status(404).send({
					message: 'Friend not found!'
				})
			}
		})
})

router.post('/', (request, response, next) => {
	validFriend(request.body) ?
		queries.create(request.body).then(friend => response.json(friend[0])) :
		next(new Error('Invalid friend format!'))
})

router.put('/:id', isValidId, (request, response, next) => {
	validFriend(request.body) ?
		queries.update(request.params.id, request.body)
		.then(friend => response.json(friend[0])) :
		next(new Error('Invalid friend format!'))
})

router.delete('/:id', isValidId, (request, response) => {
	return queries.delete(request.params.id).then(() => {
		return response.json({
			message: 'Friend removed from your list!'
		})
	})
})

module.exports = router
const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const userController = require('../controllers/user') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, userController.getStats)

module.exports = router
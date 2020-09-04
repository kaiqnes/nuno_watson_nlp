const { Router } = require('express')
const router = Router()

const conversationController = require('../controllers/conversationController')

router.post('/', conversationController.start_conversation)
router.post('/:sessionId', conversationController.continue_conversation)

module.exports = router
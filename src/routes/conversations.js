const { Router } = require('express')
const router = Router()

const conversationController = require('../controllers/conversationController')

router.post('/', conversationController.startConversation)
router.post('/:sessionId', conversationController.continueConversation)

module.exports = router
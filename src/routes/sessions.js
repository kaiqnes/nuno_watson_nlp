const { Router } = require('express')
const router = Router()

const sessionController = require('../controllers/sessionController')

router.get('/', sessionController.getSession)
router.delete('/:sessionId', sessionController.deleteSession)

module.exports = router
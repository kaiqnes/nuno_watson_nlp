module.exports = {
    continue_conversation: (req, res, next) => {
        const conversation = 'fake-conversation'
        return res.status(200).json({ conversation })
    },
    start_conversation: (req, res, next) => {
        const conversation = 'fake-new-conversation'
        return res.status(200).json({ conversation })
    }
}
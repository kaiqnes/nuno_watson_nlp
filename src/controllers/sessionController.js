module.exports = {
    getSession: (req, res, next) => {
        const sessionId = 'fake-session-id'
        return res.status(200).json({ sessionId })
    },
    deleteSession: (req, res, next) => {
        const message = 'fake-session deleted'
        return res.status(200).json({ message })
    }
}
const watson = require('../../config/watson');

module.exports = {
    getSession: async (req, res, next) => {
        await watson.assistant_instance.createSession(
            {
                assistantId: watson.assistant_id,
            },
            (error, response) => {
                if (error) {
                    console.log(error);
                    return res.json(error)
                } else {
                    // return res.status(200).json({ sessionId: response.result.session_id })
                    return response.result.session_id
                }
            },
        );
    },
    deleteSession: async (req, res, next) => {
        const message = 'fake-session deleted'
        return res.status(200).json({ message })
    }
}
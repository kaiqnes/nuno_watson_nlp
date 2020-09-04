const watson = require('../../config/watson');
const sessionController = require('./sessionController')

const firstMessage = async (req, res, next) => {
    await watson.assistant_instance.createSession(
        {
            assistantId: watson.assistant_id,
        },
        (error, response) => {
            if (error) {
                console.log(error);
                return res.json(error)
            } else {
                return sendMessage(req, res, next, response.result.session_id)
            }
        },
    );
}

const otherMessages = async (req, res, next) => {
    return await sendMessage(req, res, next, req.params.sessionId)
}

const sendMessage = async (req, res, next, sessionId) => {
    const assistantId = watson.assistant_id
    const text = req.body.text

    await watson.assistant_instance.message({
        assistantId,
        sessionId,
        input: {
            message_type: 'text',
            text,
        },
    }, (error, data) => {
        if (error) {
            if (error.message == 'Invalid Session') {
                return createSessionAndSendMessage(req, res);
            }
            console.log(error);
            return res.status(error.code || 500).json(error);
        }
        const cognitiveResponse = data.result.output
        return res.json({ sessionId, cognitiveResponse });
    });
}

module.exports = {
    startConversation: firstMessage,
    continueConversation: otherMessages
}
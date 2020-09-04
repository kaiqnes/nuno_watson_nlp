const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const baseUrl = process.env.WATSON_BASE_URL || 'https://gateway.watsonplatform.net/assistant/api/';
const version = process.env.WATSON_VERSION || '2020-04-01';
const apikey = process.env.WATSON_APIKEY || 'r3gvNlyhIw9YZUXiLIBOC9DL_3v9iMNoW43vw7yEpTPF'
const assistId = process.env.WATSON_ASSISTANT_ID || 'f3120fb8-20ce-44d7-a480-534074878249'

const watson = new AssistantV2({
    authenticator: new IamAuthenticator({ apikey: apikey }),
    url: baseUrl,
    version: version
});

module.exports = {
    assistant_instance: watson,
    assistant_id: assistId
}
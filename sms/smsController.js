const MessagingResponse = require('twilio').twiml.MessagingResponse;
const Twilio = require('twilio');

const config = require('../config/appConfig');
const {
    twilio: { accountSID, authToken, phoneNumber }
} = config;

module.exports = class SMSController {
    constructor() {
        this._accountSid = accountSID;
        this._authToken = authToken;
        this._twilioPhoneNumber = phoneNumber;
        this.client = new Twilio(this._accountSid, this._authToken);
    }

    async sendNewContentNotification(title, phoneNumbers) {
        for (const phoneNumber of phoneNumbers) {
            const message = `New Content: ${title} was added to Plex.`;
            await _sendText(message, phoneNumber);
        }
    }

    async _sendText(message, to) {
        await client.messages.create({
            body: message,
            to: to,
            from: twilioPhoneNumber
        });
    }
};

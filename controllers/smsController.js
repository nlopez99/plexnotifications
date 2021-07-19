const Twilio = require('twilio');
const config = require('../config/appConfig');
const {
    twilio: { accountSID, authToken, phoneNumber }
} = config;
const connectToDB = require('../data/helpers');

class SMSController {
    constructor() {
        this._twilioPhoneNumber = phoneNumber;
        this._client = new Twilio(accountSID, authToken);
        this.db = connectToDB();
    }

    async sendNewMovieNotification(title) {
        const phoneNumbers = await this._getAllPhoneNumbers();
        await this._sendTextToAllUsers(`New movie: ${title} now available`, phoneNumbers);
    }

    async sendNewTVShowNotification(title) {
        const phoneNumbers = await this._getAllPhoneNumbers();
        await this._sendTextToAllUsers(`New TV show: ${title} now available`, phoneNumbers);
    }

    async _getAllPhoneNumbers() {
        const users = await this.db.collection('users').find({}).toArray();
        return users.map((user) => user.phoneNumber);
    }

    async _sendTextToAllUsers(message, phoneNumbers) {
        for (const phoneNumber of phoneNumbers) {
            await _sendText(message, phoneNumber);
        }
    }

    async _sendText(message, to) {
        await this._client.messages.create({
            body: message,
            to: to,
            from: this._twilioPhoneNumber
        });
    }
}

module.exports = SMSController;

require('dotenv').config()

module.exports = config = {
    app: {
        port: process.env.PORT
    },
    db: {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        host: process.env.DB_HOST,
        databaseName: process.env.DB_NAME,
        port: process.env.DB_PORT
    },
    twilio: {
        accountSID: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        phoneNumber: process.env.TWILIO_PHONE_NUMBER
    }
};

module.exports = config = {
    app: {
        port: process.env.PORT
    },
    db: {
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        databaseName: process.env.PG_DATABASE,
        port: process.env.PG_PORT
    },
    twilio: {
        accountSID: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        phoneNumber: process.env.TWILIO_PHONE_NUMBER
    }
};

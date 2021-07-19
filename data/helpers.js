const mongoose = require('mongoose');
const { logSuccess } = require('../logging/logger');
const config = require('../config/appConfig');

const {
    db: { host, port, databaseName, user, pass }
} = config;

module.exports = connectToDB = () => {
    const dbURI = `mongodb://${host}:${port}/${databaseName}`;
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, user: user, pass: pass });

    let dbConnection = mongoose.connection;
    dbConnection.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
    dbConnection.on('connected', () => logSuccess(`Successfully Connected to DB: ${dbURI}`));

    return dbConnection;
};

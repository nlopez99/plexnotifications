const mongoose = require('mongoose');
const { logSuccess } = require('../logging/logger');
const config = require('../config/appConfig');

const {
    db: { host, databaseName }
} = config;

module.exports = class dataController {
    constructor() {
        this.dbURI = `mongodb://${host}/${databaseName}`;
        this.db = this.connectDB(this.dbURI);
    }

    connectDB(dbURI) {
        mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const dbConnection = mongoose.connection;
        dbConnection.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
        dbConnection.on('open', logSuccess(`Sucessfully Connected to DB: ${dbURI}`));
        return dbConnection;
    }
};

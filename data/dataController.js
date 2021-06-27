const mongoose = require('mongoose');
const { logSuccess } = require('../logging/logger');
const config = require('../config/appConfig');

const {
    db: { host, port, databaseName, user, pass }
} = config;

class dataController {
    constructor() {
        this.db = this._connectDB();
    }

    _connectDB() {
        const dbURI = `mongodb://${host}:${port}/${databaseName}`;
        mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true , user: user, pass: pass});

        let dbConnection = mongoose.connection;
        dbConnection.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
        dbConnection.on('connected', () => logSuccess(`Sucessfully Connected to DB: ${dbURI}`));

        return dbConnection;
    }

    
};

let db = new dataController()
// console.log(db)


module.exports = dataController 


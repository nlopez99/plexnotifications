const mongoose = require('mongoose');
const { logSuccess } = require('../logging/logger');
const config = require('../config/appConfig');

const {
    db: { host, port, databaseName, user, pass }
} = config;

class dataController {
    constructor() {
        this.dbURI = `mongodb://${user}:${pass}@${host}:${port}/${databaseName}`;
        this.db = this._connectDB(this.dbURI);
    }

    _connectDB(dbURI) {
        console.log(dbURI)
        mongoose.createConnection(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const dbConnection = mongoose.connection;
        dbConnection.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
        dbConnection.on('open', function() {logSuccess(`Sucessfully Connected to DB: ${dbURI}`)});
        return dbConnection;
    }
};

let db = new dataController()
// console.log(db)


module.exports = dataController 


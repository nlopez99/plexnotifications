const mongoose = require('mongoose');
const { logSuccess } = require('../logging/logger');
const { User } = require('../models/user');
const connectToDB = require('../data/helpers');

class UserController {
    constructor() {
        this.db = connectToDB();
    }
}

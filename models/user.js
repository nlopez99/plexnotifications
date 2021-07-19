import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    lastLogin: { type: Date, default: Date.now },
    lastWatch: { type: Date, default: Date.now }
});

const User = mongoose.model('Activity', UserSchema);

module.exports = {
    User
};

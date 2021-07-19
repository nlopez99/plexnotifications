import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
    activityId: mongoose.Schema.Types.ObjectId,
    eventType: String,
    contentType: String,
    contentTitle: String,
    seasonTitle: String,
    episodeTitle: String,
    activityTime: { type: Date, default: Date.now }
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = {
    Activity
};

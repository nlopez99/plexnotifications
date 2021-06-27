import mongoose from 'mongoose';
const { Schema } = mongoose;


const requestSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    lastLogin: Date,
    lastWatch: String,
  });


const subscriberSchema = new Schema({
    id: Number,
    title: String,
    contentType: String,
    subscriberId: Number,
});

const activitySchema = new Schema({

})


module.exports = {
    requestSchema,
    subscriberSchema,
    activitySchema
}
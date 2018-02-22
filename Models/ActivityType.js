var mongoose = require('mongoose');
var ActivityCategory = require('../Models/ActivityCategory');

var ActivityTypeSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    activityCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ActivityCategory' }

});
module.exports = mongoose.model('ActivityType', ActivityTypeSchema);
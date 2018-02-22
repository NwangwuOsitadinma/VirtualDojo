var mongoose = require('mongoose');
var ActivityType = require('../Models/ActivityType');
var ActivityCategorySchema = mongoose.Schema({
    name: String,
    description: String,
    activityTypes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ActivityType' }]
});

module.exports = mongoose.model('ActivityCategory', ActivityCategorySchema);
var mongoose = require('mongoose');

var ActivityRatingSchema = mongoose.Schema({
    activityId: String,
    internId: String,
    ratingScore: Number
});

module.exports = mongoose.model('ActivityRating', ActivityRatingSchema);
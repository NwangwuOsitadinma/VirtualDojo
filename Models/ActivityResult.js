var mongoose = require('mongoose');

var ActivityResultSchema = mongoose.Schema({
    activityId: String,
    instructorId: String,
    internId: String,
    acitvityScore: Number
});

module.exports = mongoose.model('ActivityResult', ActivityResultSchema);
var mongoose = require('mongoose');

var ActivityCategorySchema = mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('ActivityCategory', ActivityCategorySchema);
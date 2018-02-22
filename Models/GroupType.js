var mongoose = require('mongoose');

var GroupTypeSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('GroupType', GroupTypeSchema);
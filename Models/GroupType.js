var mongoose = require('mongoose');
var Group = require('../Models/Group');
var GroupTypeSchema = mongoose.Schema({
    name: String,
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }]
})

module.exports = mongoose.model('GroupType', GroupTypeSchema);
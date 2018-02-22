var mongoose = require('mongoose');
var GroupType = require('../Models/GroupType');

var GroupSchema = mongoose.Schema({
    name: String,
    isActive: Boolean,
    groupType: { type: mongoose.Schema.Types.ObjectId, ref: 'GroupType' }
});

module.exports = mongoose.model('Group', GroupSchema);
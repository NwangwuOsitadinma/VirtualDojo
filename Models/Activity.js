var mongoose = require('mongoose');
var Group = require('../Models/Group');

var ActivitySchema = mongoose.Schema({
    name: String,
    startTime: Date,
    isActive: Boolean,
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],

})
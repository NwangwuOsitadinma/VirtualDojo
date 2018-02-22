var mongoose = require('mongoose');
var GroupType = require('../Models/GroupType');
var Activity = require('../Models/Activity');
var Instructor = require('../Models/InstructorProfile');
var GroupSchema = mongoose.Schema({
    name: String,
    isActive: Boolean,
    groupType: { type: mongoose.Schema.Types.ObjectId, ref: 'GroupType' },
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
    instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' }]
});

module.exports = mongoose.model('Group', GroupSchema);
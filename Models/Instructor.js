var mongoose = require('mongoose');
var Institution = require('../Models/Institution');
var Activity = require('../Models/Activity');
var Group = require('../Models/Group');
var User = require('../Models/User');
var Designation = require('../Models/Designation');

var InstructorSchema = mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    dob: Date,
    phone: Number,
    address: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
    actvities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
    designations: [{ type: mongoose.Types.Schema.ObjectId, ref: 'Designation' }]

});
module.exports = mongoose.model('Instructor', InternSchema);
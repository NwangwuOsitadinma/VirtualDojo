var mongoose = require('mongoose');
var User = require('../Models/User');
var Group = require('../Models/Group');
var InternSchema = mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    dob: Date,
    phone: Number,
    address: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
});

module.exports = mongoose.model('Intern', InternProfileSchema);
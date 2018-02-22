var mongoose = require('mongoose');
var Institution = require('../Models/Institution');
var Group = require('../Models/Group');

var InternSchema = mongoose.Schema({
    firstName: String,
    email: String,
    dob: Date,
    phone: Number,
    address: String,
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
    institution: { type: mongoose.Types.Schema.ObjectId, ref: 'Institution' }

});
module.exports = mongoose.model('Intern', InternSchema);
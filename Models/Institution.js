var mongoose = require('mongoose');
var UserProfile = require('../Models/UserProfile');
var InstitutionSchema = mongoose.Schema({
    name: String,
    userprofiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile' }]
});

module.exports = mongoose.model('Institution', InstitutionSchema);
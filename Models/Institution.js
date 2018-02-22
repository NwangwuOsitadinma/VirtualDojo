var mongoose = require('mongoose');

var InstitutionSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Institution', InstitutionSchema);
var mongoose = require('mongoose');


var SampleSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Sample', SampleSchema);
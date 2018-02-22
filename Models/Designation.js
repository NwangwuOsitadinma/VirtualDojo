var mongoose = require('mongoose');

var DesignationSchema = mongoose.Schema({
    name: String,
    description: String,
    instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' }]
});

module.exports = mongoose.model('Designation', DesignationSchema);